import {Inject, Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {WINDOW} from '../../@libs/utils/window.service';
import {UserManager} from '../user/user.manager';


/**
 * A classe UsePlatformAuthActivate é responsável por verificar se a aplicação possui token de aplicação e de usuário válido.
 * Caso não tenha um token de aplicação ou de usuário redireciona para a página de boas vindas para obter as identificações necessárias.
 */
@Injectable()
export class PlatformAuthLoginActivate implements CanActivate, CanActivateChild {

  /**
   * Construtor
   *
   * @param router
   * @param user
   * @param window
   */
  constructor(@Inject(Router) public router: Router,
              @Inject(UserManager) public user: UserManager,
              @Inject(WINDOW) public window: Window) {
  }

  /**
   * Guarda o endereço da url para fazer redirecionamento posterirmente
   * Verifica se existe um token de aplicação válido
   * Verifica se existe um token de usuário válido
   */
  public canActivate(): boolean {
    // Verifica se existe token de aplicação válido

    // TODO:: Implementar verificação de Token de acesso
    /*if (!this.tokenApplication.isValid) {
      console.log('NÂO TEM TOKEN VÁLIDO');
      //Caso contrário redireciona a aplicação para a tela de boas vindas
      //TODO:: Implementar Welcome
      this.router.navigate(['/']);
      return false;
    }*/

    if (!this.user.isLogged) {
      this.router.navigate(['/account/login']);
      return false;
    }
    return true;
  }

  public canActivateChild(): boolean {
    // Verifica se existe token de aplicação válido

    // TODO:: Implementar verificação de Token de acesso
    /*if (!this.tokenApplication.isValid) {
      console.log('NÂO TEM TOKEN VÁLIDO');
      //Caso contrário redireciona a aplicação para a tela de boas vindas
      //TODO:: Implementar Welcome
      this.router.navigate(['/']);
      return false;
    }*/

    /*if (!this.user.isLogged) {
      this.router.navigate(['/user/login']);
      return false;
    }*/
    return true;
  }
}

