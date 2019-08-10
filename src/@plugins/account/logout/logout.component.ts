import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {UserManager} from '../../user/user.manager';


/**
 * A classe `LogoutComponent` é por desconectar o usuário da conta.
 */
@Component({
  selector: 'logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  /**
   * Configura os serviços necessários no componente
   *
   * @param _router Gerenciador de rotas
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param userManager Gerenciador de usuário logado
   */
  constructor(@Inject(Router) private _router: Router,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(UserManager) public userManager: UserManager) {
  }

  ngOnInit() {
    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      this.userManager.logout();
      this._router.navigate(['/'])
    }
  }
}
