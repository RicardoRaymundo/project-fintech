import {ResetPasswordFormInterface} from './reset-password-form.interface';
import {ResetPasswordFormSchema} from './reset-password-form.schema';


/**
 * A classe AccountResetPasswordData é responsavel pela estrutura de dados necessária para recuperação de senha
 */
export class ResetPasswordFormData {
  constructor(value?: ResetPasswordFormInterface) {
    this.value = value;
  }

  /**
   * Senha de confirmação
   */
  private _passwordConfirm: string;

  public get passwordConfirm(): string {
    return this._passwordConfirm;
  }

  public set passwordConfirm(value: string) {
    this._passwordConfirm = value;
  }

  /**
   * Recebe token de verificação de atenticidade de usuário
   */
  private _token: string;

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
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
   * Senha do usuário
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
  public get value(): ResetPasswordFormInterface {
    return {
      email: this.email,
      password: this.password,
      token: this.token
    };
  }

  /**
   * Recebe dados do formulário para popular o objeto data
   * @param value
   */
  public set value(value: ResetPasswordFormInterface) {
    if (value) {
      this.email = value.email;
      this.password = value.password;
      this.passwordConfirm = value.password_confirm;
    }
  }

  /**
   * Retorna o status indicando se os dados do formulário estão válidos
   */
  public get ready(): boolean {
    const formSchema: ResetPasswordFormSchema = new ResetPasswordFormSchema();

    //Verifica se a estrutura de dados está válida
    if (formSchema.test(this.value)) {
      return this.token && (this.password === this.passwordConfirm);
    }
    //Caso contrário dispara mensagem de erro de schema
    else {
      console.error('ERROR FORM SCHEMA', formSchema.errors);
      return false;
    }
  }
}
