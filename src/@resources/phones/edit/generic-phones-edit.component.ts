import {Component, Inject, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';
import {GENERAL_TYPES} from '../../global-types/global-types';
import {PhoneInterface} from '../phone.interface';
import {GenericPhonesSchema} from '../generic-phones.schema';
import {GenericEditAbstract} from '../../generic-edit.abstract';
import {GenericEditInterface} from '../../generic-edit.interface';


@Component({
  selector: 'generic-phones-edit',
  templateUrl: './generic-phones-edit.template.html'
})
export class GenericPhonesEditComponent extends GenericEditAbstract implements GenericEditInterface {
  /**
   * Lista de tipos de telefones de uso geral
   */
  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;

  constructor(@Inject(FormBuilder) public formBuilder) {
    super(formBuilder, GenericPhonesSchema.VALIDATORS);
  }

  /**
   * Dados do telefone
   */
  private _data: PhoneInterface;

  public get data(): PhoneInterface {
    return this._data;
  }

  @Input()
  public set data(value: PhoneInterface) {
    this._data = value;
    this.populateForm();
  }

  /**
   * Evento disparado quando o usuário cancela a edição
   */
  public onCancelEdit(): void {
    this.formGroup = this.formBuilder.group(GenericPhonesSchema.VALIDATORS);
    this.cancel.emit();
  }

  /**
   * Popula item de formulário com dados recebido do formulário pai
   */
  public populateForm(): void {
    this.formGroup.patchValue({ddd: this.data.ddd});
    this.formGroup.patchValue({type: this.data.type});
    this.formGroup.patchValue({number: this.data.number});
  }
}
