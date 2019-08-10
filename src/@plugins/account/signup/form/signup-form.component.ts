import {Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupFormData} from './signup-form.data';
import {Subject} from 'rxjs';
import {Security} from '../../../security/security';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';
import {AccountService} from '../../account.service';
import {SignupFormInterface} from './signup-form.interface';


/**
 * A classe SignupFormComponent é responsavel pela lógica do formulário para registro de usuário
 */
@Component({
  selector: 'signup-form',
  templateUrl: 'signup-form.template.html',
  styleUrls: ['./signup-form.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupFormComponent implements OnInit, OnDestroy {

  // Dados do usuário
  public formData: SignupFormData;
  // Grupo de elementos do formulário
  public formGroup: FormGroup;
  // Status indica se email existe
  public emailExist: boolean = true;
  // Status indica que está fazendo loadinde dados e mostra barra de progresso
  public showLoading: boolean = false;
  // Recebe o valor do campo de email para montar palavra que será usada na busca
  public subject: Subject<string> = new Subject<string>();

  // Objeto visual de gestão de erros de senha
  @ViewChild('errorPassword', {static: false}) public errorPassword: ElementRef;

  /**
   * Configura os serviços necessários no componente
   *
   * @param _router
   * @param _renderer Manipulador DOM
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param accountService Gerenciador de conexão dom microserviços API
   */
  constructor(@Inject(Router) private _router: Router,
              @Inject(Renderer2) private _renderer: Renderer2,
              @Inject(FormBuilder) private _formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private _platform: any,
              @Inject(AccountService) public accountService: AccountService) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      // Cria o grupo do formulário
      this.formGroup = _formBuilder.group(this.validator);

      // Cria o objeto de dados do registro de usuário
      this.formData = new SignupFormData();
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): SignupFormInterface {
    return {
      first_name: ['', Validators.required], // Primeiro nome do usuário
      last_name: [''], // Sobrenome do usuário
      email: ['', [Validators.required, Validators.email]], // E-mails do usuário
      password: [{value: '', disabled: false}, [Validators.required]], // Senha de acesso do usuário
      agree_terms_policy: [false], // Concorda com os termos e política
      agree_receive_news: [false], // Concorda em receber notícias
    };
  }

  /**
   * Inicializador da classe
   */
  public ngOnInit(): void {
    // Cria senha inicial para o registro do usuário
    this.formGroup.controls.password.setValue(Security.generatePassword());

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      // Processa a digitação de letras para montar palavras que será executada na consulta na base de dados
      this.subject
        .pipe(debounceTime(300))
        .pipe(map((ev: any) => {
          return ev.target.value;
        }))
        .pipe(distinctUntilChanged())
        .subscribe((value) => {
          this._emailExist(value);
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
   * Recebe digitação de email para formar palavra
   * @param value
   */
  public onFindEmail(value: any): void {
    // Configura o mail como invalido para bloquear o botão salvar
    this.emailExist = true;
    this.subject.next(value);
  }

  /**
   * Evento executado quando o formulário é disparado
   */
  public onSubmit(): void {
    this.showLoading = true;
    this.formData.value = this.formGroup.value;

    // Verifica se a estrutura de dados está válida
    if (this.formData.ready) {
      // Registra novo usuário no servidor de base de dados
      this.accountService.accountSignup(this.formData.value, (result: any) => {
        // Verifica se conseguiu registrar novo usuário
        if (result.success) {
          this.showLoading = false;
          this._router.navigate(['/account/signup/success']);
        }
      });
    }
  }

  /**
   * Verifica se email está disponível para uso
   */
  private _emailExist(email: string): void {
    // Verifica se o email é válido
    if (this.formGroup.controls.email.valid) {
      this.showLoading = true;
      // Executa ação para consultar base de dados
      this.accountService.signupEmailExist({email: email}, (result: any) => {
        console.log('result', result);
        // Verifica se encontrou email registrado
        if (result.success && result.total) {
          // Configura estatus de email
          this.emailExist = true;
          // Configura erro no componente de email do formulário
          this.formGroup.controls.email.setErrors({error: true});
          this.formGroup.controls.email.markAsTouched();
        }
        // Caso contrário remove o erro do componente de email do formulário
        else {
          // Configura estatus de email
          this.emailExist = false;
          this.formGroup.controls.email.setErrors(null);
          this.formGroup.controls.email.markAsUntouched();
        }
        this.showLoading = false;
      });
    }
  }

}
