import {Component, Inject, Input, Renderer2, ViewChild} from '@angular/core';
import {GlobalTypesInterface} from '../../global-types/global-types.interface';
import {GENERAL_TYPES, GlobalTypes} from '../../global-types/global-types';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {SnackbarService} from '../../../@plugins/snackbar/snackbar.service';
import {GenericPhonesEditComponent} from '../edit/generic-phones-edit.component';
import {PhoneInterface} from '../phone.interface';
import {GenericListAbstract} from '../../generic-list.abstract';
import {GenericListInterface} from '../../generic-list.interface';
import {GenericPhonesSchema} from '../generic-phones.schema';
import {FocusMonitor} from '@angular/cdk/a11y';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'generic-phones-list',
  templateUrl: './generic-phones-list.template.html'
})
export class GenericPhonesListComponent extends GenericListAbstract implements GenericListInterface {

  @ViewChild(GenericPhonesEditComponent, {static: false}) public editComponent: GenericPhonesEditComponent;

  public activeItem: PhoneInterface;
  public listGeneralTypes: Array<GlobalTypesInterface> = GENERAL_TYPES;

  constructor(@Inject(DialogService) public useIdeDialog: DialogService,
              @Inject(SnackbarService) public snackbar: SnackbarService,
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

  public get value(): Array<PhoneInterface> {
    return this.listData;
  }

  /**
   * Abre modo de inclusão de e-mail
   */
  public onShowAddEditItem(): void {
    this.editComponent.data = GenericPhonesSchema.DEFAULT;
    this.activeItem = null;
    this.activeElement = null;
    this.showHideEditor(true);
  }

  /**
   * Abre popup para confirmar exclusão
   *
   * @param item
   */
  public onRemoveItem(item: PhoneInterface): void {
    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir telefone',
      message: `Tem certeza de que deseja mover o telefone '${item.number}' para a Lixeira?`,
      btnConfirmLabel: 'Remover'
    }, () => {
      this.remove(item);
    });
  }

  /**
   * Recebe phone editado para atualizar a lista
   * @param item
   */
  public onEditorUpdate(item: PhoneInterface): void {
    super.onEditorUpdate(item);
    this._configType();
  }

  /**
   * Verifica se o phone já existe na lista
   * Caso exista dispara alerta de erro
   * Caso não exista adiciona na lista
   * @param item
   * @private
   */
  public addItem(item: PhoneInterface): void {
    const len: number = this.listData.length;
    let status: boolean = false;
    for (let i = 0; i < len; i++) {
      if (this.listData[i].number === item.number) {
        status = true;
        break;
      }
    }
    if (status) {
      this.snackbar.open({
        message: `O telefone '${item.number}', já existe na lista de telefones.`,
      });
    } else {
      this.listData.push(item);
      this.showHideEditor(false);
    }
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
