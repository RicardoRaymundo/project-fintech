import {ApiSchema} from '../../../../@libs/api-connect/api-schema';
import {Injectable} from '@angular/core';

/**
 * A classe `GenerateTokenFormSchema` define o schema de dados para gerar token de validação de conta de usuário.
 */

@Injectable({
  providedIn: 'root'
})
export class GenerateTokenFormSchema extends ApiSchema {

  public schema: any = {
    '$id': 'https://www.apiconnect.solutions/schemas/user/account/generate-token.schema.json',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'description': 'Schema de dados para gerar token de validação de conta de usuário',
    'type': 'object',
    'properties': {
      'email': {
        'type': 'string',
        'description': 'Email do usuário',
      }
    },
    'required': [
      'email'
    ],
    'dependencies': {}
  };
}
