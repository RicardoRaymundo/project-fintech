export interface OauthTokenOptionsInterface {
  baseUrl: string;
  client_id: string;
  audience?: string;
  code_verifier: string;
  code: string;
}
