import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {LoginData} from './login.data';
import {AccountService} from '../account.service';
import {UserManager} from '../../user/user.manager';
import {LoginInterface} from './login.interface';


@Component({
  selector: 'login-main',
  templateUrl: './login.template.html',
  styleUrls: ['./login.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  isActive = false;

  // Dados do usuário
  public formData: LoginData;
  // Grupo de elementos do formulário
  public formGroup: FormGroup;

  // Em caso de falha mostra mensagem de erro
  public loginFail: boolean = false;

  // Status indica que a página está pronta para ser visualizada
  public active: boolean = false;

  /**
   * Configura os serviços necessários no componente
   *
   * @param _activatedRoute Captura parâmetros da rota ativa
   * @param _router Gerenciador de rotas
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de lógica de negócio
   * @param userManager Gerenciador de usuário
   */
  constructor(@Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute,
              @Inject(Router) private _router: Router,
              @Inject(FormBuilder) private _formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(AccountService) public accountService: AccountService,
              @Inject(UserManager) public userManager: UserManager) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {

      // Cria o grupo do formulário
      this.formGroup = _formBuilder.group(this.validator);

      // Cria o objeto de dados do registro de usuário
      this.formData = new LoginData();

      this.loginFail = false;

      // Assina serviço de recuperação de parâmetros da url
      this._activatedRoute.queryParams.subscribe((params: any) => {
        // Verifica se recebeu parametro de email
        if (params.hasOwnProperty('email')) {
          this.formData.email = params.email;
          // Configura email do usuário
          this.formGroup.controls.email.setValue(params.email);
        }
      });
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): LoginInterface {
    return {
      email: ['', [Validators.required, Validators.email]], // E-mail do usuário
      password: [{value: '', disabled: false}], // Senha de acesso do usuário
      remember: [false] // Status indica que deve criar sessão de usuário persistente
    };
  }

  /**
   * Inicializador da classe
   */
  public ngOnInit(): void {
    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      // Configura animação do fundo da página
      this.active = true;
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
   */
  public onSubmit(): void {
    this.formData.value = this.formGroup.value;

    // Verifica se a estrutura de dados está válida
    if (this.formData.ready) {
      // Consulta servidor de base de dados para verificar se o usuário é válido
      this.accountService.userLogin(this.formData.value, (result: any) => {
        // Verifica se o usuário é válido
        if (result.success && result.total && result.data.email_is_valid) {
          this.userManager.login(result);
          // this._router.navigate(['/']);
        }
        // Caso contrário verifica se o usuário existe mas não está válido
        else if (result.success && result.total) {
          // this._router.navigate(['/user/account/generate/token']);
        }
        // Caso contrário dispara mensagem de erro
        else {
          this.loginFail = true;
        }
      });
    }
  }
}
