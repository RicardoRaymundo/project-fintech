import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {PlatformConfig} from '../../@plugins/platform/platform.config';
import {Inject, OnDestroy} from '@angular/core';
import {CookieService} from '../../@plugins/cookie/cookie.service';



/**
 * @license
 * Copyright ApiConnect Soluções Digitais Ltda. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.apiconnect.soluctions/license
 */
/**
 * A classe `ApiService` realiza chamadas http/https.
 */
export abstract class ApiService implements OnDestroy {
  protected baseUrl: string;
  // Lista de serviços que precisam ser des-assinados
  private _unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(@Inject(HttpClient) private _http: HttpClient,
              @Inject(CookieService) private _cookieService: CookieService) {
    this.baseUrl = PlatformConfig.SERVER_URI || '';
  }

  /**
   * Remove assinaturas de serviços no momento em que o componente é destruído
   */
  public ngOnDestroy() {
    const len: number = this._unsubscribe.length;
    for (let i = 0; i < len; i++) {
      this._unsubscribe[i].unsubscribe();
      delete (this._unsubscribe[i]);
    }
    this._unsubscribe = [];
  }

  /**
   * Envia para o servidor api requsição do tipo GET
   *
   * @param endpoint Endereço da api
   * @param httpOptions Opções de configurações
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public get(endpoint: string, httpOptions: any, next: (result: any) => void): void {
    console.log('URL', this._url(endpoint));
    const subscription: Subscription = this._http.get(this._url(endpoint), httpOptions).subscribe((result: any) => {
      next(result);
    });
    // Registra assinatura de comunicação com servidor
    this._unsubscribe.push(subscription);
  }

  /**
   * Envia para o servidor api requisição do tipo POST
   *
   * @param endpoint Endereço da api
   * @param body Dados que deve ser registrados na base de dados
   * @param httpOptions Opções de configurações
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public post(endpoint: string, body: any, httpOptions: any, next: (result: any) => void): void {
    const subscription: Subscription = this._http.post(this._url(endpoint), body, httpOptions).subscribe((result: any) => {
      next(result);
    });
    // Registra assinatura de comunicação com servidor
    this._unsubscribe.push(subscription);
  }

  /**
   * Envia para o servidor api requisição do tipo PUT
   *
   * @param endpoint Endereço da api
   * @param body Dados que deve ser registrados na base de dados
   * @param httpOptions Opções de configurações
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public put(endpoint: string, body: any, httpOptions: any, next: (result: any) => void): void {
    const subscription: Subscription = this._http.put(this._url(endpoint), body, httpOptions).subscribe((result: any) => {
      next(result);
    });
    // Registra assinatura de comunicação com servidor
    this._unsubscribe.push(subscription);
  }

  /**
   * Prepara as configurações do header que deverá ser enviada
   *
   * @param params Opções de configurações definida pelo client
   * @param headers Configurações adicionais de headers
   * @private
   */
  public options(params: any = {}, headers: any = {}): any {
    headers['Content-Type'] = 'application/json';
    headers['session-id'] = this._cookieService.get('SID');
    headers['Authorization'] = this._authorization();
    return {
      withCredentials: false,
      headers: new HttpHeaders(headers),
      params: params || {}
    };
  }

  /**
   * Prepara a url que o servidor deve conectar
   *
   * @param endpoint Parte do endereço que deve ser conectado
   * @private
   */
  private _url(endpoint: string): string {
    let url: string = this.baseUrl || '';
    if (!endpoint.startsWith('/')) {
      url += '/' + endpoint;
    } else {
      url += endpoint;
    }
    return url;
  }

  /**
   *
   * @private
   */
  private _authorization(): string {
    return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiI1YjlkMTQyZjBjNWEyZjc1ZWUxODkwMzEiLCJhcHAiOiJsYXYtY29tcGFueSIsInVpZCI6IjVjYWFiMDBjMTM4OWZhMmYyMDYwMjk3NyIsImFjbCI6IjVjYjUzNDFjZTRkMjlkY2ZlNzQyZTg2OCIsInVzciI6IklzcmFlbCBBZ29laXJvIiwidHlwIjoidGtzIiwiaWF0IjoxNTU2MzA3ODc3fQ.pDneE12ElSpsH9YJ_f7OU0ftBtr3hUb-m60YWGc7px4';
  }
}
