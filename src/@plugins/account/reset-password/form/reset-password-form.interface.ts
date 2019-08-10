/**
 * A classe `AccountResetPasswordInterface` é responsável pela estrutura de dados para a recuperação de senha.
 */
export interface ResetPasswordFormInterface {
  email: any; //Email do usuário
  password: any; //Senha do usuário
  password_confirm?: any; //Senha de confirmação do usuário
  token?: any; //Token de confirmação de autenticidade do usuário
}
