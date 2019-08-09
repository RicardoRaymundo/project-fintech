import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {DialogTradeInterface} from '../dialog/trade/dialog-trade.interface';
import {DialogTradeComponent} from '../dialog/trade/dialog-trade.component';
import {SelectionModel} from '@angular/cdk/collections';
import {DialogFxComponent} from '../dialog/fx/dialog-fx.component';
import {DialogDuplicateComponent} from '../dialog/duplicate/dialog-duplicate.component';
import {DialogDuplicateInterface} from '../dialog/duplicate/dialog-duplicate.interface';
import {DialogLiquidationInterface} from '../dialog/liquidation/dialog-liquidation.interface';
import {DialogLiquidationComponent} from '../dialog/liquidation/dialog-liquidation.component';
import {DialogFxInterface} from '../dialog/fx/dialog-fx.interface';


export interface PeriodicElement {
  _id: string;
  number: string;
  created_at: string;
  type: string;
  operation: string;
  quantity: number;
  price: string;
  counterpart: string;
  exchange: string;
  total: string;
  status: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    _id: '1',
    number: '123456789',
    created_at: '01/01/2019 14:34',
    type: 'Trade',
    operation: 'Compra',
    quantity: 10,
    price: '40.000,00',
    counterpart: 'Binance',
    exchange: '',
    total: 'R$ 400.000,00',
    status: 'NEW'
  },
  {
    _id: '2',
    number: '987654321',
    created_at: '01/01/2019 14:15',
    type: 'Trade',
    operation: 'Venda',
    quantity: 10,
    price: '63.850,00',
    counterpart: 'Binance',
    exchange: '',
    total: 'R$ 563.854,00',
    status: 'NEW'
  },
  {
    _id: '3',
    number: '456987123',
    created_at: '01/01/2019 17:53',
    type: 'FX',
    operation: 'Compra',
    quantity: 30000,
    price: '375.000,00',
    counterpart: 'Safra',
    exchange: 'D+2',
    total: 'R$ 112.500,00',
    status: 'NEW'
  },
];


@Component({
  selector: 'boletagem-list',
  templateUrl: './boletagem-list.template.html',
  styleUrls: ['./boletagem-list.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoletagemListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['select', 'number', 'created_at', 'type', 'operation', 'quantity', 'price', 'counterpart', 'exchange', 'total', 'status', 'menu'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public selectedIndex: string | any;
  public selectedItem: any;
  public selection = new SelectionModel<PeriodicElement>(true, []);

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
  public onAddItemTrade(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogTrade({
      title: 'Adicionar Boletagem Trade',
      message: '',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }

  public onAddItemFX(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogFX({
      title: 'Adicionar Boletagem FX',
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
    if (this.selectedItem.type === 'FX') {
      this.openDialogFX({
        title: 'Editar Boletagem FX',
        message: '',
        btnConfirmLabel: 'Salvar'
      }, () => {
        console.log('ADD ITEM');
      });
    } else {
      this.openDialogTrade({
        title: 'Editar Boletagem Trade',
        message: '',
        btnConfirmLabel: 'Salvar'
      }, () => {
        console.log('ADD ITEM');
      });
    }
  }

  public onDuplicateItem(): void {
    const item: any = {title: '123456789'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogDuplicate({
      title: 'Duplicar Boletagem',
      message: `Tem certeza de que deseja duplicar a boletagem '${item.title}'.`,
      complement: '123456 (Binance)',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }

  public onLiquidationItem(): void {
    const item: any = {title: '123456789'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogLiquidation({
      title: 'Liquidar Boletagem',
      message: `Tem certeza de que deseja liquidar a boletagem '${item.title}'.`,
      complement: '123456 (Binance)',
      created_at: '27/07/2019 15:22',
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
    const item: any = {title: '123456789'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Boletagem',
      message: `Tem certeza de que deseja mover a boletagem '${item.title}' para a Lixeira?`,
      complement: '123456 (Binance)',
      type: 'Boletagem',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  public openDialogDuplicate(message: DialogDuplicateInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogDuplicateComponent, {
      data: message,
      maxWidth: '800px'
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

  public openDialogLiquidation(message: DialogLiquidationInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogLiquidationComponent, {
      data: message,
      maxWidth: '800px'
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

  public openDialogTrade(message: DialogTradeInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogTradeComponent, {
      data: message,
      maxWidth: '800px'
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

  public openDialogFX(message: DialogFxInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogFxComponent, {
      data: message,
      maxWidth: '800px'
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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
