export interface TransactionInterface {
  nonce: string;
  scope: string;
  audience: string;
  appState?: any;
  code_verifier: string;
}
