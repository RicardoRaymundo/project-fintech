import {Inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {WINDOW} from '../../@libs/utils/window.service';
import {Url} from '../../@libs/utils/url';


/**
 * A classe UsePlatformAuthActivate é responsável por verificar se a aplicação possui token de aplicação e de usuário válido.
 * Caso não tenha um token de aplicação ou de usuário redireciona para a página de boas vindas para obter as identificações necessárias.
 */
@Injectable()
export class PlatformAuthActivate implements CanActivate {

  /**
   * Construtor
   *
   * @param router
   * @param window
   */
  constructor(@Inject(Router) public router: Router,
              @Inject(WINDOW) public window: Window) {
  }

  /**
   * Guarda o endereço da url para fazer redirecionamento posterirmente
   * Verifica se existe um token de aplicação válido
   * Verifica se existe um token de usuário válido
   */
  public canActivate(): boolean {
    // Guarda o endereço para fazer redirecionamento depois de identificar a aplicação e usuário
    const useUrl: Url = new Url(this.window.location.href);
    console.log('CAN ACTIVETE', useUrl);

    // TODO:: Implementar
    // Verifica se existe token de aplicação válido
    /*if (!this.tokenApplication.isValid) {
      //Caso contrário redireciona a aplicação para a tela de boas vindas
      //TODO:: Welcome
      this.router.navigate(['/']);
      return false;
    }
    return this.user.isLogged;*/

    return true;
  }
}
