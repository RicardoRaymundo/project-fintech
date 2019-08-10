import {Inject, Injectable} from '@angular/core';
import {EmailInterface} from '../../@resources/emails/email.interface';
import {PhoneInterface} from '../../@resources/phones/phone.interface';
import {AddressInterface} from '../../@resources/address/address.interface';
import {UserService} from './user.service';
import {CookieService} from '../cookie/cookie.service';


@Injectable({
  providedIn: 'root'
})
export class UserManager {
  constructor(@Inject(CookieService) private _cookieService: CookieService,
              @Inject(UserService) private userService: UserService) {

    this.fullName = 'Israel Agoeiro';
    this.emails = [
      {address: 'guto@belchior.com'},
      {address: 'pessoal@belchior.com'},
      {address: 'amigos@belchior.com', primary: true}
    ];
    this.phones = [
      {
        ddd: '11',
        number: '9493-5853',
        type: 'TRABALHO'
      }
    ];

    this.address = [
      {
        postal_code: '05356-000',
        address: 'Rua conde Luiz Eduardo de Matarazzo',
        number: '250',
        complement: 'IB21',
        neighborhood: 'Vila São Silvestre',
        city: 'São Paulo',
        state: 'SP',
        type: 'RESIDENCIAL'
      }
    ];

    this.role = 'Fundador do grupo';
    this.bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim' +
      ' ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  }

  /**
   * Descrição do usuário
   */
  private _bio: string;

  public get bio(): string {
    return this._bio;
  }

  public set bio(value: string) {
    this._bio = value;
  }

  /**
   * Identificador do usuário na base de dados
   */
  private _id: string;

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  /**
   * Nome completo do usuário
   */
  private _fullName: string;

  public get fullName(): string {
    return this._fullName;
  }

  public set fullName(value: string) {
    this._fullName = value;
  }

  /**
   * E-mail primário é o email principal do usuário, utilizado para efetuar login e receber notificações importantes
   */
  private _email: string;

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  /**
   * Lista de emails do usuários
   * O usuário pode ter diferentes emails configurado em sua conta
   * Tipos: primary, backup, notifications
   */
  private _emails: Array<EmailInterface> = [];

  public get emails(): Array<EmailInterface> {
    return this._emails;
  }

  public set emails(values: Array<EmailInterface>) {
    this._emails = values || [];

    this.emails.forEach((item: EmailInterface) => {
      if (item.primary) {
        this.email = (item.address).toString();
      }
    });

  }

  /**
   * Lista de telefones do usuários
   * O usuário pode ter diferentes numeros de telefone configurado em sua conta
   */
  private _phones: Array<PhoneInterface> = [];

  public get phones(): Array<PhoneInterface> {
    return this._phones;
  }

  public set phones(values: Array<PhoneInterface>) {
    this._phones = values || [];
  }

  /**
   * Lista de endereços do usuários
   * O usuário pode ter diferentes tipos de endereços configurado em sua conta
   */
  private _address: Array<AddressInterface> = [];

  public get address(): Array<AddressInterface> {
    return this._address;
  }

  public set address(values: Array<AddressInterface>) {
    this._address = values || [];
  }

  /**
   * Identificador do papel/cargo do usuário na empresa/comunidade
   */
  private _role: string;

  public get role(): string {
    return this._role;
  }

  public set role(values: string) {
    this._role = values;
  }

  /**
   *
   */
  public get info(): any {
    return {
      email: this.email,
      fullname: this.fullName,
      role: this.role,
      bio: this.bio
    };
  }

  public set info(value: any) {
    this._isLogged = true;
  }

  /**
   * Verifica se o usuário está logado
   * Caso contrário envia para a página de login
   */
  private _isLogged: boolean = false;
  public get isLogged(): boolean {
    if (!this._isLogged) {
      // Recupera a session ID do usuário logado
      const token = this._cookieService.get('SID');
      if (token) {
        this._isLogged = true;
        // Conecta o servidor de base de dados para recuperar informações do usuário
        this.userService.userSession({token: token}, (result: any) => {
          // Verifica se conseguiu obter token de sessão e dados do usuário
          if (result.success && result.total) {
            this.login(result.data);
          }
          // Caso contrário remove identificador de sessão do cookie realizando logout
          else {
            this.logout();
          }
        })
      }
    }
    return this._isLogged;
  }

  /**
   * Remove do cookie identificador de sessão do usuário
   */
  public logout(): void {
    console.log('LOGOUT');
    this._cookieService.delete('SID');
  }

  /**
   *
   * @param value Dados do usuário
   */
  public login(value: any): void {
    this.info = value.data;

    console.log(value);

    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + 0.5);

    // Registra sessão do usuário no cookie
    this._cookieService.set('SID', value.sid, value.expires, null, null, null, 'Strict');

    // Registra/Remove identificador de persistencia de sessão de usuário no cookie
    this._userRemeberCookie(value);
  }

  /**
   * Registra/Remove identificador de persistencia de sessão de usuário no cookie
   *
   * @param value Dados do usuário
   * @private
   */
  private _userRemeberCookie(value: any): void {
    // Verifica se usuário deseja guardar informações de login
    if (value.psid) {
      // Registra o identificador de persistencia da session
      this._cookieService.set('PSID', value.psid, null, null, null, null, 'Strict');
    } else {
      // Remove o identificador de persistencia da session
      this._cookieService.delete('PSID');
    }
  }

}
