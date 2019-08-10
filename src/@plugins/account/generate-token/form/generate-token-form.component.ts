import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {AccountService} from '../../account.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GenerateTokenFormInterface} from './generate-token-form.interface';
import {GenerateTokenFormData} from './generate-token-form.data';


/**
 * A classe GenerateTokenFormComponent é responsavel por enviar email do usuário para gerar token de validação da conta
 */
@Component({
  selector: 'generate-token-form',
  templateUrl: './generate-token-form.template.html'
})
export class GenerateTokenFormComponent implements OnInit, OnDestroy {

  // Dados do usuário
  public formData: GenerateTokenFormData;
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
   * @param _router Gerenciador de rotas
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de conexão dom microserviços API
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
      this.formData = new GenerateTokenFormData();
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): GenerateTokenFormInterface {
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
    this.formData.value = this.formGroup.value;
    this.showLoading = true;

    // Verifica se a estrutura de dados está válida
    if (this.formData.ready) {
      // Consulta servidor de base de dados para verificar se o usuário é válido
      this.accountService.accountGenerateToken(this.formData.value, (result: any) => {
        // Verifica se conseguiu registrar novo usuário
        if (result.success) {
          this.showLoading = false;
          this._router.navigate(['/account/signup/success']);
        }
      });
    }
  }
}
