import {Component, Inject, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';
import {GENERAL_TYPES, STATES} from '../../global-types/global-types';
import {GenericEditAbstract} from '../../generic-edit.abstract';
import {GenericEditInterface} from '../../generic-edit.interface';
import {AddressData} from '../address.data';


@Component({
  selector: 'generic-address-edit',
  templateUrl: './generic-address-edit.template.html'
})
export class GenericAddressEditComponent extends GenericEditAbstract implements GenericEditInterface {
  /**
   * Lista de tipos de endereços de uso geral
   */
  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;
  public listStates: Array<GlobalTypesInterface> = STATES;

  constructor(@Inject(FormBuilder) public formBuilder) {
    super(formBuilder, AddressData.VALIDATORS);
  }

  /**
   * Dados do endereço
   */
  private _data: AddressData;

  public get data(): AddressData {
    return this._data;
  }

  @Input()
  public set data(value: AddressData) {
    this._data = new AddressData(value);
    this.populateForm();
  }

  /**
   * Evento disparado quando o usuário cancela a edição
   */
  public onCancelEdit(): void {
    this.formGroup = this.formBuilder.group(AddressData.VALIDATORS);
    this.cancel.emit();
  }

  /**
   * Popula item de formulário com dados recebido do formulário pai
   */
  public populateForm(): void {
    this.formGroup.patchValue({postal_code: this.data.postal_code});
    this.formGroup.patchValue({address: this.data.address});
    this.formGroup.patchValue({number: this.data.number});
    this.formGroup.patchValue({complement: this.data.complement});
    this.formGroup.patchValue({neighborhood: this.data.neighborhood});
    this.formGroup.patchValue({city: this.data.city});
    this.formGroup.patchValue({state: this.data.state});
    this.formGroup.patchValue({type: this.data.type});
  }
}
