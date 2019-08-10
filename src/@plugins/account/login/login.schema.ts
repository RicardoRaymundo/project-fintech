import {ApiSchema} from '../../../@libs/api-connect/api-schema';
import {Injectable} from '@angular/core';


/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
/**
 * A classe `LoginFormSchema` define o schema de dados para efetuar login.
 */

@Injectable({
  providedIn: 'root'
})
export class LoginSchema extends ApiSchema {

  public schema: any = {
    '$id': 'https://www.apiconnect.solutions/schemas/user/login.schema.json',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'description': 'Schema de dados para efetuar login',
    'type': 'object',
    'properties': {
      'email': {
        'type': 'string',
        'description': 'Email do usuário',
      },
      'password': {
        'type': 'string',
        'description': 'Senha de acesso',
        'format': 'regex',
        'pattern': '[a-zA-Z0-9]',
        'minLength': 8,
        'maxLength': 16
      },
      'remember': {
        'type': 'boolean',
        'description': 'Status indica que deve criar sessão de usuário persistente',
      },
    },
    'required': [
      'email',
      'password',
      'remember'
    ],
    'dependencies': {}
  };
}
