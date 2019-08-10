/**
 * A classe `SignupFormInterface` define a estrutura de dados do registro de usuário.
 */
export interface SignupFormInterface {
  first_name: any; //Primeiro do usuário
  last_name: any; //Sobrenome do usuário
  email: any; //E-mail do usuário
  password: any; //Senha de acesso do usuário
  agree_terms_policy: any; //Concorda com os termos e política
  agree_receive_news: any; //Concorda em receber notícias
}
