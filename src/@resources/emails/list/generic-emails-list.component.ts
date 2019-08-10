import {Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import {EmailInterface} from '../email.interface';
import {GenericEmailsEditComponent} from '../edit/generic-emails-edit.component';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {SnackbarService} from '../../../@plugins/snackbar/snackbar.service';
import {GenericListAbstract} from '../../generic-list.abstract';
import {GenericListInterface} from '../../generic-list.interface';
import {GenericEmailsSchema} from '../generic-emails.schema';
import {FocusMonitor} from '@angular/cdk/a11y';


@Component({
  selector: 'generic-emails-list',
  templateUrl: './generic-emails-list.template.html'
})
export class GenericEmailsListComponent extends GenericListAbstract implements GenericListInterface {
  @ViewChild(GenericEmailsEditComponent, {static: false}) public editComponent: GenericEmailsEditComponent;

  public activeItem: EmailInterface;

  constructor(@Inject(DialogService)  public useIdeDialog: DialogService,
              @Inject(SnackbarService)  public snackbar: SnackbarService,
              @Inject(Renderer2)  public renderer: Renderer2,
              @Inject(FocusMonitor)  public focusMonitor: FocusMonitor) {
    super(renderer, focusMonitor);
  }

  public get value(): Array<EmailInterface> {
    return this.listData;
  }

  /**
   * Verifica se o email já existe na lista
   * Caso exista dispara alerta de erro
   * Caso não exista adiciona na lista
   * @param item
   * @private
   */
  public addItem(item: EmailInterface): void {
    const len: number = this.listData.length;
    let status: boolean = false;
    for (let i = 0; i < len; i++) {
      if (this.listData[i].address === item.address) {
        status = true;
        break;
      }
    }
    if (status) {
      this.snackbar.open({
        message: `O e-mail '${item.address}', já existe na lista de e-mails.`,
      });
    } else {
      this.listData.push(item);
      this.showHideEditor(false);
    }
  }

  /**
   * Abre popup para confirmar exclusão
   *
   * @param item
   */
  public onRemoveItem(item: EmailInterface): void {

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir e-mail',
      message: `Tem certeza de que deseja mover o e-mail '${item.address}' para a Lixeira?`,
      btnConfirmLabel: 'Remover'
    }, () => {
      this.remove(item);
    });
  }

  /**
   * Abre modo de inclusão de e-mail
   */
  public onShowAddEditItem(): void {
    this.editComponent.data = GenericEmailsSchema.DEFAULT;
    this.activeItem = null;
    this.activeElement = null;
    this.showHideEditor(true);
  }
}
