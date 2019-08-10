import {GetUserOptionsInterface} from './get-user-options.interface';


export interface GetTokenSilentlyOptionsInterface extends GetUserOptionsInterface {
  /**
   * When `true`, ignores the cache and always sends a
   * request to Auth0.
   */
  ignoreCache?: boolean;

  /**
   * There's no actual redirect when getting a token silently,
   * but, according to the spec, a `redirect_uri` param is required.
   * Auth0 uses this parameter to validate that the current `origin`
   * matches the `redirect_uri` `origin` when sending the response.
   * It must be whitelisted in the "Allowed Web Origins" in your
   * Auth0 Application's settings.
   */
  redirect_uri?: string;
}
