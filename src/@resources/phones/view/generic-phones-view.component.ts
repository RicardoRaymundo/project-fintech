import {Component, Input} from '@angular/core';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';
import {GENERAL_TYPES, GlobalTypes} from '../../global-types/global-types';
import {PhoneInterface} from '../phone.interface';


@Component({
  selector: 'generic-phones-view',
  templateUrl: './generic-phones-view.template.html'
})
export class GenericPhonesViewComponent {

  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;

  /**
   * Lista de phones para edição
   */
  private _listData: Array<PhoneInterface> = [];

  public get listData(): Array<PhoneInterface> {
    return this._listData;
  }

  /**
   * Recebe a lista de phones do usuário
   * @param value
   */
  @Input()
  public set listData(value: Array<PhoneInterface>) {
    this._listData = value;
    this._configType();
  }

  public get value(): Array<PhoneInterface> {
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
