"use strict";
/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
Object.defineProperty(exports, "__esModule", {value: true});
/**
 * A classe `ApiOptions` define os parâmetros de configuração das opções de conexão com servidor HTTP.
 */
var ApiOptions = /** @class */ (function () {
  function ApiOptions(url, headers) {
    this.headers = headers;
    this.url = url;
  }

  Object.defineProperty(ApiOptions.prototype, "headers", {
    get: function () {
      return this._headers;
    },
    set: function (value) {
      this._headers = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ApiOptions.prototype, "url", {
    get: function () {
      return this._url;
    },
    set: function (value) {
      this._url = value;
    },
    enumerable: true,
    configurable: true
  });
  return ApiOptions;
}());
exports.ApiOptions = ApiOptions;
