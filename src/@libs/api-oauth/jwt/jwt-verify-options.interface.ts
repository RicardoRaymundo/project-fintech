export interface JwtVerifyOptionsInterface {
  iss: string;
  aud: string;
  id_token: string;
  nonce?: string;
  leeway?: number;
}
