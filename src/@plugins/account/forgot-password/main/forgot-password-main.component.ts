import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {ForgotPasswordMainData} from './forgot-password-main.data';
import {ForgotPasswordMainInterface} from './forgot-password-main.interface';
import {AccountService} from '../../account.service';


/**
 * A classe `ForgotPasswordFormComponent` é responsável pela recuperação da senha de usuário.
 */
@Component({
  selector: 'forgot-password-form',
  templateUrl: './forgot-password-main.template.html',
  styleUrls: ['./forgot-password-main.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordMainComponent implements OnInit, OnDestroy {

  // Dados do usuário
  public formData: ForgotPasswordMainData;
  // Grupo de elementos do formulário
  public formGroup: FormGroup;

  // Status indica que a página está pronta para ser visualizada
  public active: boolean = false;

  // Status indica se email existe
  public emailExist: boolean = true;

  // Status indica que está fazendo loadinde dados e mostra barra de progresso
  public showLoading: boolean = false;

  /**
   * Configura os serviços necessários no componente
   *
   * @param _router Gerenciador de rotas
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de lógica de negócio
   */
  constructor(@Inject(Router) private _router: Router,
              @Inject(FormBuilder) private _formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(AccountService) public accountService: AccountService) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      // Cria o grupo do formulário
      this.formGroup = _formBuilder.group(this.validator);

      // Cria o objeto de dados do registro de usuário
      this.formData = new ForgotPasswordMainData();
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): ForgotPasswordMainInterface {
    return {
      email: ['', [Validators.required, Validators.email]], // E-mail do usuário
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
    this.showLoading = true;
    this.formData.value = this.formGroup.value;

    // Verifica se a estrutura de dados está válida
    if (this.formData.ready) {
      // Consulta servidor de base de dados para verificar se o usuário é válido
      this.accountService.forgotPassword(this.formData.value, (result: any) => {
        this.showLoading = false;
        // Verifica se encontrou email
        if (result.total) {
          this.emailExist = true;
          this._router.navigate(['/account/forgot-password-success']);
        } else {
          this.emailExist = false;
        }
      });
    }
  }
}
