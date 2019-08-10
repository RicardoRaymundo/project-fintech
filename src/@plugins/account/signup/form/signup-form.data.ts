import {SignupFormInterface} from './signup-form.interface';
import {SignupFormSchema} from './signup-form.schema';


/**
 * A classe SignupFormData é responsavel pela estrutura de dados para registro de usuário
 */
export class SignupFormData {
  constructor(value?: SignupFormInterface) {
    this.value = value;
  }

  /**
   * Sobrenome do usuário
   */
  private _lastName: string;

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Concorda em receber noticias
   */
  private _agreeReceiveNews: boolean;

  public get agreeReceiveNews(): boolean {
    return this._agreeReceiveNews;
  }

  public set agreeReceiveNews(value: boolean) {
    this._agreeReceiveNews = value;
  }

  /**
   * Concorda com os termos e política
   */
  private _agreeTermsPolicy: boolean;

  public get agreeTermsPolicy(): boolean {
    return this._agreeTermsPolicy;
  }

  public set agreeTermsPolicy(value: boolean) {
    this._agreeTermsPolicy = value;
  }

  /**
   * Primeiro nome do usuário
   */
  private _firstName: string;

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Endereço email do usuário
   */
  private _email: string;

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  /**
   * Senha de acesso
   */
  private _password: string;

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  /**
   * Retorna a estrutura de dados para enviar o documento para a base de dados
   */
  public get value(): SignupFormInterface {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      agree_terms_policy: this.agreeTermsPolicy,
      agree_receive_news: this.agreeReceiveNews
    };
  }

  /**
   * Recebe dados do formulário para popular o objeto data
   * @param value Estrutura de dados para registro de usuário
   */
  public set value(value: SignupFormInterface) {
    if (value) {
      this.firstName = value.first_name;
      this.lastName = value.last_name;
      this.email = value.email;
      this.password = value.password;
      this.agreeTermsPolicy = value.agree_terms_policy;
      this.agreeReceiveNews = value.agree_receive_news;
    }
  }

  /**
   * Retorna o status indicando se os dados do formulário estão válidos
   */
  public get ready(): boolean {
    const formSchema: SignupFormSchema = new SignupFormSchema();

    //Verifica se a estrutura de dados está válida
    if (formSchema.test(this.value)) {
      return true;
    }
    //Caso contrário dispara mensagem de erro de schema
    else {
      console.error('ERROR FORM SCHEMA', formSchema.errors);
      return false;
    }
  }
}
