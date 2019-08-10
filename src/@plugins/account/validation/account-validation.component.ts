import {Component, Inject, OnDestroy, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {AccountService} from '../account.service';


/**
 * A classe AccountValidateComponent é responsavel por enviar para o servidor o token de validação da conta do usuário
 */
@Component({
  selector: 'account-validate',
  template: '<mat-progress-bar mode="indeterminate"></mat-progress-bar>'
})
export class AccountValidationComponent implements OnDestroy {
  /**
   * Configura os serviços necessários no componente
   *
   * @param _activatedRoute Captura parâmetros da rota ativa
   * @param _router Gerenciador de rotas
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de conexão dom microserviços API
   */
  constructor(@Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute,
              @Inject(Router) private _router: Router,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(AccountService) public accountService: AccountService) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      this._activatedRoute.queryParams.subscribe((params: any) => {
        // Verifica se recebeu token de validação de conta
        if (params.hasOwnProperty('token')) {
          this.accountValidate(params.token);
        }
        // Caso contrário redireciona para a home
        else {
          this._router.navigate(['/']);
        }
      });
    }
  }

  /**
   * Remove assinaturas de serviços
   */
  public ngOnDestroy() {
    this.accountService.ngOnDestroy();
  }

  /**
   * Evento executado quando o formulário é disparado
   *
   * @param token Token de identificação de usuário
   */
  public accountValidate(token: string): void {
    const data: any = {'token': token};

    // Envia token de validação de conta para o servidor
    this.accountService.accountValidation(data, (result: any) => {
      // Verifica se obteve sucesso na validação da conta do usuário
      if (result.success && result.total) {
        this._router.navigate(['/account/login'], {queryParams: {email: result.data.email}});
      }
      // Caso redireciona para tela de mensagem de falha na validação
      else {
        this._router.navigate(['/account/validation-failed']);
      }
    });
  }
}
