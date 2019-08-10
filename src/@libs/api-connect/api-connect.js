"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var request = require("request");
/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
/**
 * A classe `ApiConnect` realiza chamadas http/https.
 */
var ApiConnect = /** @class */ (function () {
  function ApiConnect(endpoint, options) {
    this._options = options;
    this._endpoint = endpoint;
  }

  ApiConnect.prototype.options = function (body) {
    return {
      url: this._options.url + this._endpoint,
      formData: body ? body : null,
      headers: this._options ? this._options.headers : null
    };
  };
  /**
   *
   * @param body
   * @param callback
   */
  ApiConnect.prototype.post = function (body, callback) {
    console.log(this.options(body));
    request.post(this.options(body), function (err, httpResponse, body) {
      if (err) {
        callback(err, null);
      } else {
        callback(err, body);
      }
    });
  };
  return ApiConnect;
}());
exports.ApiConnect = ApiConnect;
