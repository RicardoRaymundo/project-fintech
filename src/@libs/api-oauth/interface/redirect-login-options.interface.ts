import {BaseLoginOptionsInterface} from './base-login-options.interface';


export interface RedirectLoginOptionsInterface extends BaseLoginOptionsInterface {
  /**
   * The URL where Auth0 will redirect your browser to with
   * the authentication result. It must be whitelisted in
   * the "Allowed Callback URLs" field in your Auth0 Application's
   * settings.
   */
  redirect_uri?: string;
  /**
   * Used to store state before doing the redirect
   */
  appState?: any;
}
