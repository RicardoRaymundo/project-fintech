import {Inject, Injectable} from '@angular/core';
import {CanDeactivate, Router} from '@angular/router';
import {WINDOW} from '../../@libs/utils/window.service';
import {CookieService} from '../cookie/cookie.service';


/**
 * A classe AuthGuard é responsável por verificar se a aplicação possui token de acesso de aplicação válido.
 * Caso a aplicação ainda não tenha um token de acesso deve conectar com o servidor de microsserviços e solicitar um token de acesso.
 * O token de acesso de aplicação é gravado no cookie e deve ser enviado para todas as janelas em que a comunicação seja estabelecida.
 *
 * De posso de token de acesso de aplicação a classe AuthGuard verifica se o usuário está logado e se existe um token de acesso de usuário válido.
 * Caso o usuário não esteja logado ou seu token de acesso seja inválido é direcionado para a página de login.
 *
 */
@Injectable()
export class PlatformAuthDeactivate implements CanDeactivate<any> {
  /**
   *
   *
   * @param window
   * @param cookie
   */
  constructor(
    @Inject(WINDOW) public window: Window,
    @Inject(CookieService) private cookie: CookieService,
    @Inject(Router) public router: Router) {
  }

  /**
   *
   */
  public canDeactivate(): boolean {
    const href: string = decodeURIComponent(this.window.location.href);
    console.log('CanDeactivate:href', href);

    // Recupera o token de aplicação
    const tokenApp: string = this.cookie.get('use-app');

    // Verifica se existe token de aplicação
    if (tokenApp) {
      // Verifica se o token de aplicação é válido
    } else {
      // Envia redireciona a aplicação para a tela de boas vindas
      // this.router.navigate(['?auth=app']);
    }

    if (localStorage.getItem('currentUser')) {
    }
    return true;
  }
}
