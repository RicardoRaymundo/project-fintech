import {LoginInterface} from './login.interface';
import {LoginSchema} from './login.schema';


/**
 * A classe LoginFormData é responsavel pela estrutura de dados necessária para efetuar o login usuário na aplicação
 */
export class LoginData {
  constructor(value?: LoginInterface) {
    this.value = value;
  }

  /**
   * Endereço email do usuário
   */
  private _email: string;

  /**
   * Email do usuário
   */
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
   * Status indica se deve ter persistência de sessão de usuário
   */
  private _remember: boolean;

  public get remember(): boolean {
    return this._remember;
  }

  public set remember(value: boolean) {
    this._remember = value;
  }

  /**
   * Retorna a estrutura de dados para enviar o documento para a base de dados
   */
  public get value(): LoginInterface {
    return {
      email: this.email,
      password: this.password,
      remember: this.remember
    };
  }

  /**
   * Recebe dados do formulário para popular o objeto data
   * @param value
   */
  public set value(value: LoginInterface) {
    if (value) {
      this.email = value.email;
      this.password = value.password;
      this.remember = value.remember;
    }
  }

  /**
   * Retorna o status indicando se os dados do formulário estão válidos
   */
  public get ready(): boolean {
    const formSchema: LoginSchema = new LoginSchema();

    // Verifica se a estrutura de dados está válida
    if (formSchema.test(this.value)) {
      return true;
    }
    // Caso contrário dispara mensagem de erro de schema
    else {
      console.error('ERROR FORM SCHEMA', formSchema.errors);
      return false;
    }
  }
}
