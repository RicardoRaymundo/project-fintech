import {GenerateTokenFormInterface} from './generate-token-form.interface';
import {SignupFormSchema} from '../../signup/form/signup-form.schema';
import {GenerateTokenFormSchema} from './generate-token-form.schema';


/**
 * A classe GenerateTokenFormData é responsavel pela estrutura de dados necessária para gerar token de validação de conta
 */
export class GenerateTokenFormData {
  constructor(value?: GenerateTokenFormInterface) {
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
   * Retorna a estrutura de dados para enviar o documento para a base de dados
   */
  public get value(): GenerateTokenFormInterface {
    return {
      email: this.email
    };
  }

  /**
   * Recebe dados do formulário para popular o objeto data
   * @param value
   */
  public set value(value: GenerateTokenFormInterface) {
    if (value) {
      this.email = value.email;
    }
  }

  /**
   * Retorna o status indicando se os dados do formulário estão válidos
   */
  public get ready(): boolean {
    const formSchema: GenerateTokenFormSchema = new GenerateTokenFormSchema();

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
