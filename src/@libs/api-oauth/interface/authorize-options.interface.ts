import {BaseLoginOptionsInterface} from './base-login-options.interface';


export interface AuthorizeOptionsInterface extends BaseLoginOptionsInterface {
  response_type: string;
  response_mode: string;
  redirect_uri: string;
  nonce: string;
  state: string;
  scope: string;
  code_challenge: string;
  code_challenge_method: string;
}
