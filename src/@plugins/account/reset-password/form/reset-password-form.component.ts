import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {ResetPasswordFormData} from './reset-password-form.data';
import {AccountService} from '../../account.service';
import {ResetPasswordFormInterface} from './reset-password-form.interface';


/**
 * A classe `ResetPasswordComponent` é responsável pela recuperação da senha de usuário.
 */
@Component({
  selector: 'reset-password',
  templateUrl: './reset-password-form.template.html',
  styleUrls: ['./reset-password-form.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordFormComponent implements OnInit, OnDestroy {

  // Dados do usuário
  public formData: ResetPasswordFormData;
  // Grupo de elementos do formulário
  public formGroup: FormGroup;

  // Status indica que a página está pronta para ser visualizada
  public active: boolean = false;

  // Status indica se email existe
  public emailExist: boolean = false;

  // Status indica que está fazendo loadinde dados e mostra barra de progresso
  public showLoading: boolean = false;

  /**
   * Configura os serviços necessários no componente
   *
   * @param _activatedRoute Captura parâmetros da rota ativa
   * @param _router Gerenciador de rotas
   * @param _renderer Manipulador DOM
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de lógica de negócio
   */
  constructor(@Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute,
              @Inject(Router) private _router: Router,
              @Inject(Renderer2) private _renderer: Renderer2,
              @Inject(FormBuilder) private _formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(AccountService) public accountService: AccountService) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      // Cria o grupo do formulário
      this.formGroup = _formBuilder.group(this.validator);

      // Cria o objeto de dados do registro de usuário
      this.formData = new ResetPasswordFormData();

      // Assina serviço de recuperação de parâmetros da url
      this._activatedRoute.queryParams.subscribe((params: any) => {
        // Verifica se recebeu parametro de token
        if (params.hasOwnProperty('token')) {
          this.formData.token = params.token;
        }
      });
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): ResetPasswordFormInterface {
    return {
      email: ['', [Validators.required, Validators.email]], // E-mail do usuário
      password: ['', [Validators.required]], // Senha do usuário
      password_confirm: ['', [Validators.required]], // Senha de confirmação
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
   * Mostra/Oculta a senha
   */
  public onClickShowHidePassword(el: any): void {
    this._renderer.setAttribute(el, 'type', (el.type === 'text') ? 'password' : 'text');
  }

  /**
   * Evento executado quando o formulário é disparado
   */
  public onSubmit(): void {
    this.formData.value = this.formGroup.value;

    // Verifica se a estrutura de dados está válida

    console.log('this.formData.ready', this.formData.ready);

    if (this.formData.ready) {
      console.log('this.data.value', this.formData.value);

      // Envia informações para resetar a senha do usuário
      this.accountService.resetPassword(this.formData.value, (result: any) => {
        console.log('TERMINOU DE RESETAR PASSWORD', result);
      });
    }
  }
}
