import {Component, Input} from '@angular/core';
import {AddressInterface} from '../address.interface';
import {GENERAL_TYPES, GlobalTypes} from '../../global-types/global-types';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';


@Component({
  selector: 'generic-address-view',
  templateUrl: './generic-address-view.template.html'
})
export class GenericAddressViewComponent {

  @Input() public showAddressType: boolean = false;

  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;

  /**
   * Lista de emails para edição
   */
  private _listData: Array<AddressInterface> = [];

  public get listData(): Array<AddressInterface> {
    return this._listData;
  }

  /**
   * Recebe a lista de emails do usuário
   * @param value
   */
  @Input()
  public set listData(value: Array<AddressInterface>) {
    this._listData = value;
    this._configType();
  }

  public get value(): Array<AddressInterface> {
    return this.listData;
  }

  /**
   * Configura a visualização do tipo de phone
   * @private
   */
  private _configType(): void {
    const len: number = this.listData.length;
    for (let i = 0; i < len; i++) {
      this.listData[i]['typeValue'] = GlobalTypes.value((this.listData[i]['type']).toString(), this.listGeneralTypes);
    }
  }
}
