import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../@libs/api-connect/api-service';
import {CookieService} from '../cookie/cookie.service';
import {Location} from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService {

  constructor(@Inject(HttpClient) http: HttpClient, @Inject(CookieService) cookieService: CookieService) {
    super(http, cookieService);
  }

  /**
   * Envia identificador para gerar token de validação
   *
   * @param params Dados do usuário para gerar token
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public accountGenerateToken(params: any, next: (result: any) => void): void {
    this.get('/api/1.0/account/generate/token', this.options(params), next);
  }

  /**
   * Envia token de validação para confirmar autenticidade da conta
   *
   * @param data Token de validação
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public accountValidation(data: any, next: (result: any) => void): void {
    const header: any = {
      'public-token': data.token
    };

    const body: any = {email_is_valid: true};
    this.put('/api/1.0/account/validation', body, this.options(null, header), next);
  }

  /**
   * Realiza processo de recuperação de senha
   *
   * @param params Dados do usuário para recuperar senha
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public forgotPassword(params: any, next: (result: any) => void): void {
    this.get('/api/1.0/account/forgot-password', this.options(params), next);
  }

  /**
   * Realiza processo de resetar senha
   *
   * @param data Dados do usuário para resetar senha
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public resetPassword(data: any, next: (result: any) => void): void {
    const header: any = {
      'public-token': data.token
    };

    const body: any = {
      email: data.email,
      password: data.password
    };
    this.put('/api/1.0/account/reset-password', body, this.options(null, header), next);
  }

  /**
   * Verifica se o email está disponível para uso
   *
   * @param params Endereço de email para validar
   * @param next Ação que deve ser executada no retorna da requisição
   */
  public signupEmailExist(params: any, next: (result: any) => void): void {
    this.get('/api/1.0/account/signup/email/exist', this.options(params), next);
  }

  /**
   * Adiciona um novo usuário na base de dados
   *
   * @param body Dados do usuário para salvar na base de dados
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public accountSignup(body: any, next: (result: any) => void): void {
    this.post('/api/1.0/account/signup', body, this.options(), next);
  }

  /**
   * Realiza login de usuário
   *
   * @param body Dados do usuário para realizar login
   * @param next Ação que deve ser executada no retorno da requisição
   */
  public userLogin(body: any, next: (result: any) => void): void {
    this.post('/api/1.0/account/login', body, this.options(), next);
  }
}
