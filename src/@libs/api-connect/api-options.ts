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
export class ApiOptions {
  constructor(url: string, headers: any) {
    this.headers = headers;
    this.url = url;
  }

  /**
   *
   */
  private _json: boolean = true;

  public get json(): boolean {
    return this._json;
  }

  public set json(value: boolean) {
    this._json = value;
  }

  /**
   *
   */
  private _headers: {
    [header: string]: string | string[];
  };

  public get headers(): { [p: string]: string | string[] } {
    return this._headers;
  }

  public set headers(value: { [p: string]: string | string[] }) {
    this._headers = value;
  }

  /**
   * Endereço de conexão
   */
  private _url: string;

  public get url(): string {
    return this._url;
  }

  public set url(value: string) {
    this._url = value;
  }
}
