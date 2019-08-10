import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../@libs/api-connect/api-service';
import {CookieService} from '../cookie/cookie.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(@Inject(HttpClient) public http: HttpClient,
              @Inject(CookieService) cookieService: CookieService) {
    super(http, cookieService);
  }

  /**
   * Busca informações do usuário identificado pelo id
   *
   * @param params Dados do usuário para gerar token
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public userInfo(params: any, next: (result: any) => void): void {
    this.get('/api/1.0/user/' + params.id, this.options(), next);
  }

  /**
   *
   * @param data
   * @param next
   */
  public userSession(data: any, next: (result: any) => void): void {
    const header: any = {
      'public-token': data.token
    };

    this.get('/api/1.0/user/session', this.options(null, header), next);
  }
}
