import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {TranslateConfig} from '../../../../@plugins/config/translate.config';
import {DialogService} from '../../../../@plugins/dialog/dialog.service';
import {TransactionsDialogInterface} from './dialog/transactions-dialog.interface';
import {TransactionsDialogComponent} from './dialog/transactions-dialog.component';



export interface PeriodicElement {
  _id: string;
  hash: string;
  quantity: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', hash: 'sjabdiy32tb8o723mijx3oim2p8eunp28', quantity: '1.000.000'},
  {_id: '2', hash: 'kdjsbdi62g3o7y239uneo2he2379hep2', quantity: '750.000'},
];

@Component({
  selector: 'trade-transactions',
  templateUrl: './trade-transactions.template.html',
  styleUrls: ['./trade-transactions.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TradeTransactionsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['hash', 'quantity', 'menu'];
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

  public onAddAccount(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogAccount({
      title: 'Adicionar Transação',
      message: '',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }
  public onEditAccount(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogAccount({
      title: 'Editar Transação',
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
    const item: any = {title: 'sjabdiy32tb8o723mijx3oim2p8eunp28'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Transação',
      message: `Tem certeza de que deseja mover a transação '${item.title}' para a Lixeira?`,
      complement: 'sjabdiy32tb8o723mijx3oim2p8eunp28 (1.000.000)',
      type: 'Transação',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  public openDialogAccount(message: TransactionsDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(TransactionsDialogComponent, {
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

  public onAddAcount(): void {

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
