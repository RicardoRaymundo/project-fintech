export interface AuthenticationResultInterface {
  state: string;
  code?: string;
  error?: string;
  error_description?: string;
}
