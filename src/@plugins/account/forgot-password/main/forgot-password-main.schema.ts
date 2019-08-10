import {ApiSchema} from '../../../../@libs/api-connect/api-schema';
import {Injectable} from '@angular/core';


/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
/**
 * A classe `ForgotPasswordFormSchema` define o schema de dados para recuperação de senha.
 */

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordMainSchema extends ApiSchema {

  public schema: any = {
    '$id': 'account/forgot-password.schema.json',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'description': 'Schema de dados para efetuar login',
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
