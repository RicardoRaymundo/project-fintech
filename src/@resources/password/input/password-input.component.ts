import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Self,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Security} from '../../../@plugins/security/security';
import {Router} from '@angular/router';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NgControl, Validators} from '@angular/forms';
import {AccountService} from '../../../@plugins/account/account.service';
import {isPlatformBrowser} from '@angular/common';
import {MatFormFieldControl} from '@angular/material';

/**
 * Validador de senha
 * @param control Objeto de controle do formulário
 * @constructor
 */
export function ValidatePassword(control: AbstractControl) {
  let err = {passwordError: true};

  const value = control.value;
  let error: boolean = false;

  // Verifica se tem letra minúscula
  if (!(/[a-z]/.test(value))) {
    error = true;
  }

  // Verifica se tem letra maiúscula
  if (!(/[A-Z]/.test(value))) {
    error = true;
  }

  // Verifica se tem números
  if (!((/[0-9]/).test(value))) {
    error = true;
  }

  const length: number = value.length;

  // Verifica se tem mais de 8 caracteres
  if (!((length >= 8))) {
    error = true;
  }

  // Verifica se tem menos de 16 caracteres
  if (!(length !== 0 && length <= 16)) {
    error = true;
  }

  return error ? err : null;
}


/**
 * A classe PasswordInputComponent é responsável pela entrada de senha no formulário
 */
@Component({
  selector: 'password-input',
  templateUrl: './password-input.template.html',
  styleUrls: ['./password-input.styles.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => PasswordInputComponent)
    },
    {
      provide: NG_VALIDATORS,
      useValue: ValidatePassword,
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit {
  // Grupo de elementos do formulário
  public formGroup: FormGroup;
  // Status indica que deve permitir implementar a opção de gerar senha
  @Input() public sugestion: boolean = true;
  // Status indica se deve mostrar visualizador de senha
  @Input() public view: boolean = false;
  // Objeto visual de gestão de erros de senha
  @ViewChild('passwordError', {static: false}) public errorPassword: ElementRef;
  // Permita que a entrada seja desativada e, quando estiver, torne-a um pouco transparente.
  @Input() public disabled: boolean = true;
  // Dispara evento quando a senha é gerada
  @Output() public generate: EventEmitter<string> = new EventEmitter();
  // Evento disparado quando uma tecla é levantada
  @Output() public keyup: EventEmitter<any> = new EventEmitter();
  // Evento disparado quando o foco sai do input
  @Output() public blur: EventEmitter<any> = new EventEmitter();

  public placeholder: string = 'Senha';

  /**
   * Configura os serviços necessários no componente
   *
   * @param _router
   * @param _renderer Manipulador DOM
   * @param _formBuilder Contrutor dinâmico de formulário angular
   * @param _platform Identificador do tipo de plataforma browser|server
   * @param _control Gerenciador do controle de formulário
   * @param accountService Gerenciador de conexão dom microserviços API
   */
  constructor(@Inject(Router) private _router: Router,
              @Inject(Renderer2) private _renderer: Renderer2,
              @Inject(FormBuilder) private _formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private _platform: any,
              @Self() @Optional() @Inject(NgControl) public _control: NgControl,
              @Inject(AccountService) public accountService: AccountService) {

    // Verifica se está no browser
    if (isPlatformBrowser(this._platform)) {
      if (this._control) {
        this._control.valueAccessor = this;
      }

      // Cria o grupo do formulário
      this.formGroup = _formBuilder.group(this.validator);
    }
  }

  // Status indica que o campo é de confirmação de senha
  private _confirm: boolean = false;

  public get confirm(): boolean {
    return this._confirm;
  }

  @Input()
  public set confirm(value: boolean) {
    this._confirm = value;
    if (value) {
      this.placeholder = 'Confirmação de Senha';
    }
  }

  /**
   * Status indica se o componente tem erros
   */
  private _error: boolean = false;

  public get error(): boolean {
    return this._error;
  }

  @Input()
  public set error(value: boolean) {
    this._error = value;

    if (this._confirm) {
      this._messageConfirm(value);
    }
  }

  /**
   * Configura os campos e validadores do formulário
   */
  public get validator(): any {
    return {
      password: ['', [ValidatePassword, Validators.required, Validators.min(8), Validators.max(16), Validators.pattern(/[a-zA-Z0-9]/)]], // Senha de acesso do usuário
    };
  }

  /**
   * Configura o valor do componente
   */
  public get value(): string {
    return this.formGroup.controls.password.value;
  }

  public set value(value: string) {
    this.writeValue(value);
  }

  public ngOnInit(): void {
    this.disabled = this._control.disabled;
    this.formGroup.controls.password.reset({value: this.value, disabled: this.disabled});
  }

  // Function to call when the rating changes.
  public onChange = (value: any): void => {
    this.propagateChange(value);
    this.onTouched();
  };

  public propagateChange = (value: any): void => {
  };

  // Function to call when the input is touched (when a star is clicked).
  public onTouched = (): void => {
  };

  public writeValue(value: any): void {
    if (value) {
      this.formGroup.controls.password.reset({value: value, disabled: this.disabled});
    }
    this.onChange(this.value);
  }

  public registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Limpa valor do compo input
   */
  public reset(): void {
    this.formGroup.controls.password.reset({value: '', disabled: this.disabled});
    this.errorPassword.nativeElement.innerHTML = '';
    this.onChange(this.value);
  }

  // Allows Angular to disable the input.
  /**
   *
   * @param isDisabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Gera uma nova senha segura
   * @param kEvent
   */
  public onGereratePassword(kEvent: MouseEvent): void {
    if (!this.disabled) {
      const value: string = Security.generatePassword();
      this.onPasswordValidate(kEvent, value);
      this.writeValue(value);
      this.generate.emit(value);
    }
  }

  /**
   * Mostra/Oculta a senha
   */
  public onShowHidePassword(el: any): void {
    if (!this.disabled) {
      this._renderer.setAttribute(el, 'type', (el.type === 'text') ? 'password' : 'text');
    }
  }

  /**
   * Recebe digitação de senha para validação
   * @param kEvent
   * @param value
   */
  public onPasswordValidate(kEvent: any, value: any): void {

    this.errorPassword.nativeElement.innerHTML = '';

    if (!this._confirm && !this.disabled) {
      const message: string = this._message(value);

      if (this.error) {
        this.errorPassword.nativeElement.innerHTML = message;
      }

      this.onChange(value);
    }

    this.keyup.emit(kEvent);
  }

  /**
   * Prepara mensagem de erro de senha
   * @param value
   * @private
   */
  private _message(value: string) {
    let message: string = '<p>A senha deve ter:</p><ul class="password-error">';
    this.error = false;

    if (!(/[a-z]/.test(value))) {
      message += '<li class="invalid">Letras minúsculas</li>';
      this.error = true;
    }
    if (!(/[A-Z]/.test(value))) {
      message += '<li class="invalid">Letras MAIÚSCULAS</li>';
      this.error = true;
    }
    if (!((/[0-9]/).test(value))) {
      message += '<li class="invalid">Números</li>';
      this.error = true;
    }

    const length: number = value.length;
    if (!((length >= 8))) {
      message += '<li class="invalid">Mínimo de 8 Dígitos</li>';
      this.error = true;
    }
    if (!(length !== 0 && length <= 16)) {
      message += '<li class="invalid">Máximo de 16 Dígitos</li>';
      this.error = true;
    }
    message += '</ul>';

    return message;
  }

  /**
   * Prepara mensagem de erro de senha
   * @param error
   * @private
   */
  private _messageConfirm(error: boolean): void {

    this.errorPassword.nativeElement.innerHTML = '';

    // Verifica se componente é do tipo confirmação de senha e possui erros
    if (this._confirm && error) {
      let message: string = '<p>A confirmação de senha deve ser:</p><ul class="password-error">';
      message += '<li class="invalid">Igual a senha principal</li>';
      message += '</ul>';

      this.errorPassword.nativeElement.innerHTML = message;

      this.formGroup.controls.password.setErrors({'error': true});
      this.formGroup.controls.password.markAsTouched();
    }
    // Caso contrário configura erros no campo do formulário
    else if (this._confirm) {
      this.formGroup.controls.password.setErrors(null);
      this.formGroup.controls.password.markAsUntouched();
    }

    this.onChange(this.value);
  }
}
