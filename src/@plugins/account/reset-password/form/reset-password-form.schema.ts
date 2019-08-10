import {ApiSchema} from '../../../../@libs/api-connect/api-schema';
import {Injectable} from '@angular/core';


/**
 * A classe `ForgotPasswordFormSchema` define o schema de dados para recuperação de senha.
 */

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordFormSchema extends ApiSchema {

  public schema: any = {
    '$id': 'account/reset-password.schema.json',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'description': 'Schema de dados para recuperação de senha',
    'type': 'object',
    'properties': {
      'email': {
        'type': 'string',
        'description': 'Email do usuário',
      },
      'password': {
        'type': 'string',
        'description': 'Senha do usuário',
      }
    },
    'required': [
      'email',
      'password'
    ],
    'dependencies': {}
  };
}
