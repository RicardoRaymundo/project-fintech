import {AfterViewInit, Component, Inject, Input, Renderer2, ViewChild} from '@angular/core';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';
import {GENERAL_TYPES, GlobalTypes} from '../../global-types/global-types';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {GenericListAbstract} from '../../generic-list.abstract';
import {GenericListInterface} from '../../generic-list.interface';
import {AddressInterface} from '../address.interface';
import {GenericAddressEditComponent} from '../edit/generic-address-edit.component';
import {FocusMonitor} from '@angular/cdk/a11y';
import {AddressData} from '../address.data';


@Component({
  selector: 'generic-address-list',
  templateUrl: './generic-address-list.template.html'
})
export class GenericAddressListComponent extends GenericListAbstract implements GenericListInterface, AfterViewInit {

  @ViewChild(GenericAddressEditComponent, {static: false}) public editComponent: GenericAddressEditComponent;

  @Input() public showAddressType: boolean = false;
  @Input() public label: string = 'Endereços';

  public activeItem: AddressInterface;
  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;

  constructor(@Inject(DialogService) public useIdeDialog: DialogService,
              @Inject(Renderer2) public renderer: Renderer2,
              @Inject(FocusMonitor) public focusMonitor: FocusMonitor) {
    super(renderer, focusMonitor);
  }

  /**
   * Lista de dados para edição
   */
  protected _listData: Array<any> = [];

  public get listData(): Array<any> {
    return this._listData;
  }

  @Input()
  public set listData(value: Array<any>) {
    this._listData = value;
    this._configType();
  }

  public get value(): Array<AddressInterface> {
    return this.listData;
  }

  /**
   * Abre modo de inclusão de e-mail
   */
  public onShowAddEditItem(): void {
    this.editComponent.data = new AddressData();
    this.activeItem = null;
    this.activeElement = null;
    this.showHideEditor(true);
  }

  /**
   * Abre popup para confirmar exclusão
   *
   * @param item
   */
  public onRemoveItem(item: AddressInterface): void {
    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir endereço',
      message: `Tem certeza de que deseja mover o endereço '${item.address}, ${item.number}' para a Lixeira?`,
      btnConfirmLabel: 'Remover'
    }, () => {
      this.remove(item);
    });
  }

  /**
   * Recebe phone editado para atualizar a lista
   * @param item
   */
  public onEditorUpdate(item: AddressInterface): void {
    super.onEditorUpdate(item);
    this._configType();
  }

  /**
   * Adiciona endereço na lista
   * @param item
   * @private
   */
  public addItem(item: AddressInterface): void {
    this.listData.push(item);
    this.showHideEditor(false);
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
