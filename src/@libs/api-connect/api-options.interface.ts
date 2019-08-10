/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
/**
 * A interface `ApiOptionsInterface` define os parâmetros de configuração das opções de conexão com servidor HTTP.
 */
export interface ApiOptionsInterface {
  url: string;
  json: boolean;
  formData?: any;
  headers?: {
    [header: string]: string | string[];
  };
}
