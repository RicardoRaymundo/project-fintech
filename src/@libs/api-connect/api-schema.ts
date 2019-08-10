import * as Ajv from 'ajv';


/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */

/**
 * A classe `ApiOptions` define os parâmetros de configuração das opções de conexão com servidor HTTP.
 */
export class ApiSchema {
  public ajv: any = new Ajv({allErrors: true});
  public schema: any;

  private _validate: any;
  private _valid: boolean = false;

  public get errors(): any {
    return this.ajv.errorsText(this._validate.errors);
  }

  public test(data): boolean {
    this._validate = this.ajv.compile(this.schema);
    this._valid = this._validate(data);
    return this._valid;
  }
}
