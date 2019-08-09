import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {UserDialogInterface} from '../dialog/user-dialog.interface';
import {UserDialogComponent} from '../dialog/user-dialog.component';


export interface PeriodicElement {
  _id: string;
  name: string;
  email: string;
  access_control: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', name: 'Dunamis Trading', email: 'dunamis@trading.com', access_control: {admin: false, trader: true, ops: false}},
  {_id: '2', name: 'Dunamis Trading', email: 'dunamis@trading.com', access_control: {admin: false, trader: true, ops: false}},
  {_id: '3', name: 'Dunamis Trading', email: 'dunamis@trading.com', access_control: {admin: false, trader: true, ops: false}}
];


@Component({
  selector: 'user-list',
  templateUrl: './user-list.template.html',
  styleUrls: ['./user-list.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['name', 'email', 'permissions', 'menu'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public selectedIndex: string | any;
  public selectedItem: any;

  constructor(@Inject(TranslateService) public translateService: TranslateService,
              @Inject(TranslateConfig) public translateConfig: TranslateConfig,
              @Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute,
              @Inject(MatDialog) public dialog,
              @Inject(DialogService) public useIdeDialog: DialogService) {

    // Implementa internacionalização
    this._configTranslate();
  }

  public ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.dataSource.sort = this.sort;
  }

  public onHighlight(item: any): void {
    // Verifica se o item possui a propiedade id
    if (item.hasOwnProperty('_id') && exist(item['_id'])) {
      // Registra o id do item selecionado
      this.selectedIndex = item['_id'];
      // Registra o item selecionado
      this.selectedItem = item;
    }
  }

  /**
   * Remove item da lista
   * @param item
   */
  public remove(item: any): void {
    // const index: number = this.listData.indexOf(item);
    // this.listData.splice(index, 1);
    // this.showHideEditor(false);
  }

  /**
   * Abre popup para adicionar moeda
   *
   * @param item
   */
  public onAddItem(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialog({
      title: 'Adicionar Usuário',
      message: '',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }

  /**
   * Abre popup para adicionar moeda
   *
   * @param item
   */
  public onEditItem(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialog({
      title: 'Editar Usuário',
      message: '',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }

  /**
   * Abre popup para confirmar exclusão
   *
   * @param item
   */
  public onRemoveItem(): void {
    const item: any = {title: 'Dunamis Trading'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Usuário',
      message: `Tem certeza de que deseja mover o usuário '${item.title}' para a Lixeira?`,
      complement: 'Dunamis Trading (dunamis@trading.com)',
      type: 'Usuário',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  public openDialog(message: UserDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: message,
     maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe((res: { option: string }): void => {
      if (res) {
        switch (res.option) {
          case 'confirm':
            if (confirm) {
              confirm();
            }
            break;
          case 'cancel':
            if (cancel) {
              cancel();
            }
            break;
        }
      }
    });
  }

  /**
   * Configura componentes de internacionalização
   */
  private _configTranslate(): void {
    const REGEX: any = /en|pt/;
    this.translateService.addLangs(['en', 'pt']);
    this.translateService.setDefaultLang(this.translateConfig.defaultLanguage);
    this.translateService.use(this.translateConfig.activeLang(REGEX));
    this.translateConfig.changeLang.subscribe((language) => {
      this.translateService.use(language);
    });
  }
}
