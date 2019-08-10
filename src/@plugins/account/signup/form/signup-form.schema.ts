import {ApiSchema} from '../../../../@libs/api-connect/api-schema';
import {Injectable} from '@angular/core';


/**
 * A classe `SignupFormSchema` define o schema de dados para registro de usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class SignupFormSchema extends ApiSchema {

  public schema: any = {
    '$id': 'account/signup/form/signup-form.schema',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'description': 'Schemas de dados para registro de usuário',
    'type': 'object',
    'properties': {
      'first_name': {
        'type': 'string',
        'description': 'Nome do usuário',
      },
      'last_name': {
        'type': 'string',
        'description': 'Sobrenome do usuário',
      },
      'email': {
        'type': 'string',
        'format': 'email',
        'description': 'Email principal do usuário',
      },
      'password': {
        'type': 'string',
        'description': 'Senha de acesso',
        'format': 'regex',
        'pattern': '[a-zA-Z0-9]',
        'minLength': 8,
        'maxLength': 16
      },
      'agree_terms_policy': {
        'type': 'boolean',
        'description': 'Confirmação de aceite dos termos de uso e políticas de privacidade',
      },
      'agree_receive_news': {
        'type': 'boolean',
        'description': 'Confirmação de aceite recebimento de notícias',
      }
    },
    'required': [
      'first_name',
      'email',
      'password'
    ],
    'dependencies': {}
  };
}
