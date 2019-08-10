import {OauthClientOptionsInterface} from './interface/oauth-client-options.interface';
import {ClientStorage} from './storage/client-storage';
import {TransactionManager} from './transaction/transaction-manager';
import {GetTokenSilentlyOptionsInterface} from './interface/get-token-silently-options.interface';
import CacheManager from './cache/cache-manager';
import {OauthUtils} from './oauth-utils';
import {Jwt} from './jwt/jwt';
import {AuthorizeOptionsInterface} from './interface/authorize-options.interface';
import version from './version';
import {BaseLoginOptionsInterface} from './interface/base-login-options.interface';
import {AuthenticationResultInterface} from './interface/authentication-result.interface';
import {PopupLoginOptionsInterface} from './interface/popup-login-options.interface';
import {GetUserOptionsInterface} from './interface/get-user-options.interface';
import {getIdTokenClaimsOptionsInterface} from './interface/get-id-token-claims-options.interface';
import {RedirectLoginOptionsInterface} from './interface/redirect-login-options.interface';
import {AuthenticationError} from './authentication-error';
import {RedirectLoginResultInterface} from './interface/redirect-login-result.interface';
import {GetTokenWithPopupOptions} from './interface/get-token-with-popup-options.interface';
import {LogoutOptionsInterface} from './interface/logout-options.interface';


export class OAuthClient {

  public readonly DEFAULT_SCOPE = 'openid profile email';
  private _cacheManager: CacheManager;
  private _transactionManager: TransactionManager;
  private _domainUrl: string;

  constructor(public options: OauthClientOptionsInterface) {

    this._cacheManager = new CacheManager();
    this._transactionManager = new TransactionManager();
    this._domainUrl = `https://${this.options.domain}`;
  }

  /**
   *
   * @param options
   */
  public static async create(options: OauthClientOptionsInterface) {
    const oAuthClient = new OAuthClient(options);

    if (!ClientStorage.get('auth0.is.authenticated')) {
      return oAuthClient;
    }
    try {
      await oAuthClient.getTokenSilently({
        audience: options.audience,
        scope: options.scope,
        ignoreCache: true
      });
    } catch (error) {
      // ignore
    }
    return oAuthClient;
  }

  /**
   * ```js
   * await auth0.loginWithPopup(options);
   * ```
   *
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   *
   * IMPORTANT: This method has to be called from an event handler
   * that was started by the user like a button click, for example,
   * otherwise the popup will be blocked in most browsers.
   *
   * @param options
   */
  public async loginWithPopup(options: PopupLoginOptionsInterface = {}) {
    const popup = await OauthUtils.openPopup();
    const {...authorizeOptions} = options;
    const stateIn = OauthUtils.encodeState(OauthUtils.createRandomString());
    const nonceIn = OauthUtils.createRandomString();
    const code_verifier = OauthUtils.createRandomString();
    const code_challengeBuffer = await OauthUtils.sha256(code_verifier);
    const code_challenge = OauthUtils.bufferToBase64UrlEncoded(code_challengeBuffer);
    const params = this._getParams(
      authorizeOptions,
      stateIn,
      nonceIn,
      code_challenge,
      this.options.redirect_uri || window.location.origin
    );
    const url = this._authorizeUrl({
      ...params,
      response_mode: 'web_message'
    });
    const codeResult = await OauthUtils.runPopup(popup, url);
    if (stateIn !== codeResult.state) {
      throw new Error('Invalid state');
    }
    const authResult = await OauthUtils.oauthToken({
      baseUrl: this._domainUrl,
      audience: this.options.audience,
      client_id: this.options.client_id,
      code_verifier,
      code: codeResult.code
    });
    const decodedToken = this._verifyIdToken(authResult.id_token, nonceIn);
    const cacheEntry = {
      ...authResult,
      decodedToken,
      scope: params.scope,
      audience: params.audience || 'default'
    };
    this._cacheManager.save(cacheEntry);
    ClientStorage.save('auth0.is.authenticated', true, {daysUntilExpire: 1});
  }

  /**
   * ```js
   * const user = await auth0.getUser();
   * ```
   *
   * Returns the user information if available (decoded
   * from the `id_token`).
   *
   * @param options
   */
  public async getUser(
    options: GetUserOptionsInterface = {audience: this.options.audience || 'default', scope: this.options.scope || this.DEFAULT_SCOPE}) {
    options.scope = OauthUtils.getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
    const cache = this._cacheManager.get(options);
    return cache && cache.decodedToken.user;
  }

  /**
   * ```js
   * const claims = await auth0.getIdTokenClaims();
   * ```
   *
   * Returns all claims from the id_token if available.
   *
   * @param options
   */
  public async getIdTokenClaims(options: getIdTokenClaimsOptionsInterface = {
    audience: this.options.audience || 'default',
    scope: this.options.scope || this.DEFAULT_SCOPE
  }) {
    options.scope = OauthUtils.getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
    const cache = this._cacheManager.get(options);
    return cache && cache.decodedToken.claims;
  }

  /**
   * ```js
   * await auth0.loginWithRedirect(options);
   * ```
   *
   * Performs a redirect to `/authorize` using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated.
   *
   * @param options
   */
  public async loginWithRedirect(options: RedirectLoginOptionsInterface = {}) {
    const {redirect_uri, appState, ...authorizeOptions} = options;
    const stateIn = OauthUtils.encodeState(OauthUtils.createRandomString());
    const nonceIn = OauthUtils.createRandomString();
    const code_verifier = OauthUtils.createRandomString();
    const code_challengeBuffer = await OauthUtils.sha256(code_verifier);
    const code_challenge = OauthUtils.bufferToBase64UrlEncoded(code_challengeBuffer);
    const params = this._getParams(
      authorizeOptions,
      stateIn,
      nonceIn,
      code_challenge,
      redirect_uri
    );
    const url = this._authorizeUrl(params);
    this._transactionManager.create(stateIn, {
      nonce: nonceIn,
      code_verifier,
      appState,
      scope: params.scope,
      audience: params.audience || 'default'
    });
    window.location.assign(url);
  }

  /**
   * After the browser redirects back to the callback page,
   * call `handleRedirectCallback` to handle success and error
   * responses from Auth0. If the response is successful, results
   * will be valid according to their expiration times.
   */
  public async handleRedirectCallback(): Promise<RedirectLoginResultInterface> {

    console.log('AAAAA', window.location);
    console.log('BBBBB', window.location.search);
    console.log('CCCCC', window.location.search.substr(1));

    if (!window.location.search) {
      throw new Error(
        'There are no query params available at `window.location.search`.'
      );
    }
    const {state, code, error, error_description} = OauthUtils.parseQueryResult(
      window.location.search.substr(1)
    );

    console.log('DDDDDD', state, code, error_description);

    if (error) {
      throw new AuthenticationError(error, error_description, state);
    }

    const transaction = this._transactionManager.get(state);
    if (!transaction) {
      throw new Error('Invalid state');
    }
    this._transactionManager.remove(state);

    const authResult = await OauthUtils.oauthToken({
      baseUrl: this._domainUrl,
      audience: this.options.audience,
      client_id: this.options.client_id,
      code_verifier: transaction.code_verifier,
      code
    });

    const decodedToken = this._verifyIdToken(
      authResult.id_token,
      transaction.nonce
    );
    const cacheEntry = {
      ...authResult,
      decodedToken,
      audience: transaction.audience,
      scope: transaction.scope
    };
    this._cacheManager.save(cacheEntry);
    ClientStorage.save('auth0.is.authenticated', true, {daysUntilExpire: 1});
    return {
      appState: transaction.appState
    };
  }

  /**
   * ```js
   * const token = await auth0.getTokenSilently(options);
   * ```
   *
   * If there's a valid token stored, return it. Otherwise, opens an
   * iframe with the `/authorize` URL using the parameters provided
   * as arguments. Random and secure `state` and `nonce` parameters
   * will be auto-generated. If the response is successful, results
   * will be valid according to their expiration times.
   *
   * @param options
   */
  public async getTokenSilently(
    options: GetTokenSilentlyOptionsInterface = {
      audience: this.options.audience,
      scope: this.options.scope || this.DEFAULT_SCOPE,
      ignoreCache: false
    }
  ) {
    options.scope = OauthUtils.getUniqueScopes(this.DEFAULT_SCOPE, options.scope);

    if (!options.ignoreCache) {
      const cache = this._cacheManager.get({
        scope: options.scope,
        audience: options.audience || 'default'
      });
      if (cache) {
        return cache.access_token;
      }
    }

    const stateIn: string = OauthUtils.encodeState(OauthUtils.createRandomString());
    const nonceIn: string = OauthUtils.createRandomString();
    const code_verifier: string = OauthUtils.createRandomString();
    const code_challengeBuffer: any = await OauthUtils.sha256(code_verifier);
    const code_challenge: string = OauthUtils.bufferToBase64UrlEncoded(code_challengeBuffer);
    const authorizeOptions: any = {
      audience: options.audience,
      scope: options.scope
    };
    const params: AuthorizeOptionsInterface = this._getParams(
      authorizeOptions,
      stateIn,
      nonceIn,
      code_challenge,
      this.options.redirect_uri || window.location.origin
    );
    const url: string = this._authorizeUrl({
      ...params,
      prompt: 'none',
      response_mode: 'web_message'
    });

    const codeResult: AuthenticationResultInterface = await OauthUtils.runIframe(url, this._domainUrl);
    if (stateIn !== codeResult.state) {
      throw new Error('Invalid state');
    }

    const authResult: any = await OauthUtils.oauthToken({
      baseUrl: this._domainUrl,
      audience: this.options.audience,
      client_id: this.options.client_id,
      code_verifier,
      code: codeResult.code
    });

    const decodedToken: any = this._verifyIdToken(authResult.id_token, nonceIn);
    const cacheEntry: any = {
      ...authResult,
      decodedToken,
      scope: params.scope,
      audience: params.audience || 'default'
    };
    this._cacheManager.save(cacheEntry);
    ClientStorage.save('auth0.is.authenticated', true, {daysUntilExpire: 1});
    return authResult.access_token;
  }

  /**
   * ```js
   * const token = await auth0.getTokenWithPopup(options);
   * ```
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   *
   * @param options
   */
  public async getTokenWithPopup(options: GetTokenWithPopupOptions = {
    audience: this.options.audience,
    scope: this.options.scope || this.DEFAULT_SCOPE
  }) {
    options.scope = OauthUtils.getUniqueScopes(
      this.DEFAULT_SCOPE,
      this.options.scope,
      options.scope
    );
    await this.loginWithPopup(options);
    const cache = this._cacheManager.get({
      scope: options.scope,
      audience: options.audience || 'default'
    });
    return cache.access_token;
  }

  /**
   * ```js
   * const isAuthenticated = await auth0.isAuthenticated();
   * ```
   *
   * Returns `true` if there's valid information stored,
   * otherwise returns `false`.
   *
   */
  public async isAuthenticated() {
    const user = await this.getUser();
    return !!user;
  }

  /**
   * ```js
   * auth0.logout();
   * ```
   *
   * Performs a redirect to `/v2/logout` using the parameters provided
   * as arguments. [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
   *
   * @param options
   */
  public logout(options: LogoutOptionsInterface = {}) {
    if (options.client_id !== null) {
      options.client_id = options.client_id || this.options.client_id;
    } else {
      delete options.client_id;
    }
    ClientStorage.remove('auth0.is.authenticated');
    const url = this._url(`/v2/logout?${OauthUtils.createQueryParams(options)}`);
    window.location.assign(url);
  }

  /**
   *
   * @param authorizeOptions
   * @private
   */
  private _authorizeUrl(authorizeOptions: AuthorizeOptionsInterface) {
    return this._url(`/authorize?${OauthUtils.createQueryParams(authorizeOptions)}`);
  }

  /**
   *
   * @param authorizeOptions
   * @param state
   * @param nonce
   * @param code_challenge
   * @param redirect_uri
   * @private
   */
  private _getParams(authorizeOptions: BaseLoginOptionsInterface, state: string, nonce: string, code_challenge: string, redirect_uri: string): AuthorizeOptionsInterface {
    const {domain, ...withoutDomain} = this.options;
    return {
      ...withoutDomain,
      ...authorizeOptions,
      scope: OauthUtils.getUniqueScopes(
        this.DEFAULT_SCOPE,
        this.options.scope,
        authorizeOptions.scope
      ),
      response_type: 'code',
      response_mode: 'query',
      state,
      nonce,
      redirect_uri: redirect_uri || this.options.redirect_uri,
      code_challenge,
      code_challenge_method: 'S256'
    };
  }

  /**
   *
   * @param path
   * @private
   */
  private _url(path) {
    const telemetry = encodeURIComponent(
      btoa(
        JSON.stringify({
          name: 'auth0-spa-js',
          version: version
        })
      )
    );
    return `${this._domainUrl}${path}&auth0Client=${telemetry}`;
  }

  /**
   *
   * @param id_token
   * @param nonce
   * @private
   */
  private _verifyIdToken(id_token: string, nonce?: string) {
    return Jwt.verify({
      iss: `${this._domainUrl}/`,
      aud: this.options.client_id,
      id_token,
      nonce,
      leeway: this.options.leeway
    });
  }
}
