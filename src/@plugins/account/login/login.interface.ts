/**
 * A classe `AccountLoginInterface` é responsável pela estrutura de dados do login de usuário.
 */
export interface LoginInterface {
  email: any; // Email do usuário
  password: any; // Senha de acesso do usuário
  remember: any; // Status indica que deve criar sessão de usuário persistente
}
