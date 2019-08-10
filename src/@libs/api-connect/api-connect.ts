import {ApiOptionsInterface} from './api-options.interface';
import * as request from 'request';


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
export class ApiConnect {
  /**
   * Endereço de conexão
   */
  private _endpoint: string;
  /**
   * Recebe configurações de conexão
   */
  private _options: ApiOptionsInterface;

  /*constructor(endpoint: string, options?: ApiOptionsInterface) {
    this._options = options;
    this._endpoint = endpoint;
  }*/
  /**
   * Instancia do servidor NodeJS utilizado para configuração de rotas
   */
  private _server: any;

  constructor(server?: any) {
    this._server = server;
  }

  /**
   *
   * @param server
   */
  public static server(server: any): ApiConnect {
    return new ApiConnect(server);
  }

  /**
   *
   * @param options
   * @param callback
   */
  public post(options: any, callback: (error, response, result) => void): void {
    request.post(options, (error, response, result) => {
      callback(error, response, result);
    });
  }

  /**
   * Realiza redirecionamento automático de todos os endereços api sem configuração especifica definida.
   *
   * @param endpoint Endereço que deve ser monitorado para ser redirecionado
   * @param options Configurações do servidor para onde será redirecionado
   * @param callback Ação que será executada quando retornar do servidor
   */
  public redirect(endpoint: any, options: any, callback?: (error, response, result, next) => void): void {
    /**
     * Processa todas as requisições públicas para os endereços de 'api/{version}/'
     * Reenvia para o servidor
     *
     * @param req Objeto de request do NodeJS
     * @param res Objeto de response do NodeJS
     * @param next Ação que deve ser executado quando retornar do redirecionamento
     */
    const defaultCallback = (req, res, next): void => {

      console.log('SESSION---->>>>', req.session);

      // console.log('SID', req.universalCookies.get('app-sid'));
      console.log('Cookies: ', req.cookies);
      console.log('req.headers: ', req.headers);

      // req.headers['app-sid'] = req.cookies['app-sid'];
      // console.log('app-sid', req.headers['app-sid']);
      /**
       * Recupera parâmetros da requisição do client Angular
       * Configura o objeto de opções do serviço request
       */
      const optionsApi: any = {
        url: options.serviceUrl + req.baseUrl,
        path: req.baseUrl,
        qs: req.query,
        method: req.method,
        json: true,
        headers: req.headers,
        responseType: 'buffer',
        timeout: 5000
      };

      // Verifica se é uma solicitação POST|PUT para recuperar o body da requsição
      if (req.method === 'POST' || req.method === 'PUT') {
        optionsApi.body = req.body;
      }

      // Reenvia a requisição para o servidor de APIs
      request(optionsApi, (error, response, result) => {
        if (callback) {
          callback(error, res, result, next);
        } else {
          // Processa o resultado do servidor de API
          if (error) {
            res.json(error);
          } else {
            res.json(result);
          }
          next();
        }
      });
    };

    this._server.use(endpoint, defaultCallback);
  }
}
