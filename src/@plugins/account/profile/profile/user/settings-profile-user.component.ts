import {Component, Inject, Input} from '@angular/core';
import {UserManager} from '../../../../user/user.manager';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserSchema} from './user.schema';
import {UserInterface} from './user.interface';


@Component({
  selector: 'settings-profile-user',
  templateUrl: './settings-profile-user.template.html'
})
export class SettingsProfileUserComponent {

  public formGroup: FormGroup; // Grupo de elementos do formulário angular

  constructor(@Inject(Router) public router: Router,
              @Inject(UserManager) public user: UserManager,
              @Inject(FormBuilder) public formBuilder) {
    this.formGroup = this.formBuilder.group(UserSchema.VALIDATORS);
    // this.data = user.data;
  }

  /**
   * Dados do usuário
   */
  private _data: UserInterface;

  public get data(): UserInterface {
    return this._data;
  }

  @Input()
  public set data(value: UserInterface) {
    this._data = value;
    this._populateForm();
  }

  public onUpdateProfile(): void {
    const value: any = this.formGroup.value;
    this.user.fullName = value.fullname;
    this.user.role = value.role;

    this.router.navigate(['/account/profile']);
  }

  /**
   * Recebe um campo para verificar se existe no formulário
   * @param {string} field Nome do campo para testar
   * @returns {boolean} Indica se o campo existe ou não
   */
  protected hasField(field: string): boolean {
    return this.formGroup.value.hasOwnProperty(field);
  }

  /**
   * Popula item de formulário com dados recebido do formulário pai
   *
   */
  private _populateForm(): void {
    //Processa a lista de parâmetros
    for (const field in this.data) {
      //Verifica se o formulário tem o campo passado como parâmetro
      if (this.data.hasOwnProperty(field) && this.hasField(field)) {
        //Cria objeto de configuração
        const item: any = {};
        //Popula objeto
        item[field] = this.data[field];
        //Registra no formulários
        this.formGroup.patchValue(item);
      }
      //Caso contrário dispara um erro de campo inválido
      else {
        console.error('ERROR FORM FIELD', 'O campo \'' + field + '\' não pertence ao formulário:', this.constructor.name);
      }
    }
  }
}
