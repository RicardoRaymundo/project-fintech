import {OauthTokenOptionsInterface} from './interface/oauth-token-options.interface';
import * as qs from 'qs';
import {AuthenticationResultInterface} from './interface/authentication-result.interface';

const TIMEOUT_ERROR = {error: 'timeout', error_description: 'Timeout'};


export class OauthUtils {

  public static bufferToBase64UrlEncoded(input: string): string {
    return OauthUtils.urlEncodeB64(
      // @ts-ignore
      window.btoa(String.fromCharCode(...Array.from(new Uint8Array(input))))
    );
  }

  /**
   *
   */
  public static openPopup(): any {
    const popup = window.open(
      '',
      'auth0:authorize:popup',
      'left=100,top=100,width=400,height=600,resizable,scrollbars=yes,status=1'
    );
    if (!popup) {
      throw new Error('Could not open popup');
    }
    return popup;
  }

  /**
   *
   * @param popup
   * @param authorizeUrl
   */
  public static runPopup = (popup: any, authorizeUrl: string) => {
    popup.location.href = authorizeUrl;
    return new Promise<AuthenticationResultInterface>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(TIMEOUT_ERROR);
      }, 60 * 1000);
      window.addEventListener('message', e => {
        if (!e.data || e.data.type !== 'authorization_response') {
          return;
        }
        clearTimeout(timeoutId);
        popup.close();
        if (e.data.response.error) {
          return reject(e.data.response);
        }
        resolve(e.data.response);
      });
    });
  };

  public static parseQueryResult = (hash: string) => {
    var hashed = qs.parse(hash);
    console.log('hashed', hashed);
    return <AuthenticationResultInterface>{
      ...hashed,
      expires_in: parseInt(hashed.expires_in)
    };
  };

  /**
   *
   * @param params
   */
  public static createQueryParams(params: any) {
    return qs.stringify(params);
  }

  /**
   *
   */
  public static createRandomString(): string {
    const charset =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-_~.';
    let random = '';
    const randomValues = <Uint8Array>crypto.getRandomValues(new Uint8Array(43));
    randomValues.forEach(v => (random += charset[v % charset.length]));
    return random;
  };

  /**
   *
   * @param input
   */
  public static urlEncodeB64(input: string): string {
    const b64Chars = {'+': '-', '/': '_', '=': ''};
    return input.replace(/[\+\/=]/g, (m: string) => b64Chars[m]);
  };

  /**
   *
   * @param input
   */
  public static decodeB64(input: string): string {
    return decodeURIComponent(
      atob(input)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  /**
   *
   * @param state
   */
  public static decodeState(state: string): string {
    return atob(state);
  }

  /**
   *
   * @param state
   */
  public static encodeState(state: string): string {
    return btoa(state);
  }

  public static getUniqueScopes(...scopes: string[]): string {
    const scopeString = scopes.filter(Boolean).join();
    return Array.from(new Set(scopeString.replace(/\s/g, ',').split(',')))
      .join(' ')
      .trim();
  };

  public static sha256(s: string): any {
    return window.crypto.subtle.digest({name: 'SHA-256'}, new TextEncoder().encode(s));
  }

  public static runIframe(authorizeUrl: string, eventOrigin: string): Promise<AuthenticationResultInterface> {
    return new Promise<AuthenticationResultInterface>((res, rej) => {
      var iframe = window.document.createElement('iframe');
      iframe.setAttribute('width', '0');
      iframe.setAttribute('height', '0');
      iframe.style.display = 'none';

      const timeoutSetTimeoutId = setTimeout(() => {
        rej(TIMEOUT_ERROR);
        window.document.body.removeChild(iframe);
      }, 60 * 1000);

      const iframeEventHandler = function (e: MessageEvent) {
        if (e.origin != eventOrigin) return;
        if (!e.data || e.data.type !== 'authorization_response') return;
        (<any>e.source).close();
        e.data.response.error ? rej(e.data.response) : res(e.data.response);
        clearTimeout(timeoutSetTimeoutId);
        window.removeEventListener('message', iframeEventHandler, false);
        window.document.body.removeChild(iframe);
      };
      window.addEventListener('message', iframeEventHandler, false);
      window.document.body.appendChild(iframe);
      iframe.setAttribute('src', authorizeUrl);
    });
  };

  /**
   *
   * @param input
   */
  public static urlDecodeB64(input: string): string {
    return OauthUtils.decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
  }

  /**
   *
   * @param baseUrl
   * @param options
   */
  public static async oauthToken({baseUrl, ...options}: OauthTokenOptionsInterface) {
    return await fetch(`${baseUrl}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'authorization_code',
        redirect_uri: window.location.origin,
        ...options
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(r => r.json());
  }

}
