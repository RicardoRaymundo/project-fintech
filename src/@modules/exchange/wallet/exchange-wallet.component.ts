import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {WalletDialogInterface} from './dialog/wallet-dialog.interface';
import {WalletDialogComponent} from './dialog/wallet-dialog.component';
import {ExchangeDialogInterface} from '../dialog/exchange-dialog.interface';
import {ExchangeDialogComponent} from '../dialog/exchange-dialog.component';


export interface PeriodicElement {
  _id: string;
  wallet: string;
  currency: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', wallet: 'sjabdiy32tb8o723mijx3oim2p8eunp28', currency: 'BTC'},
  {_id: '2', wallet: 'bkahsbdk62381u3m81upn381um083', currency: 'BTC'},
  {_id: '3', wallet: 'kdjsbdi62g3o7y239uneo2he2379hep2', currency: 'USDT'}
];


@Component({
  selector: 'bank-account',
  templateUrl: './exchange-wallet.template.html',
  styleUrls: ['./exchange-wallet.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExchangeWalletComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['wallet', 'currency', 'menu'];
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
      title: 'Adicionar Banco',
      message: '',
      btnConfirmLabel: 'Salvar'
    }, () => {
      console.log('ADD ITEM');
    });
  }
  public onAddWallet(): void {
    const item: any = {address: 'addr'};
    // Abre janela de dialogo para confirmar exclusão
    this.openDialogAccount({
      title: 'Adicionar Wallet',
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
      title: 'Editar Wallet',
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
      title: 'Editar Exchange',
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
    const item: any = {title: 'Binance'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Exchange',
      message: `Tem certeza de que deseja mover a exchange '${item.title}' para a Lixeira?`,
      complement: 'Binance (46.403.277/0001-66)',
      type: 'exchange',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  /**
   * Abre popup para confirmar exclusão
   *
   * @param item
   */
  public onRemoveAccount(): void {
    const item: any = {title: 'sjabdiy32tb8o723mijx3oim2p8eunp28'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Wallet',
      message: `Tem certeza de que deseja mover o wallet '${item.title}' para a Lixeira?`,
      complement: 'sjabdiy32tb8o723mijx3oim2p8eunp28 (BTC)',
      type: 'Wallet',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  public openDialog(message: ExchangeDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(ExchangeDialogComponent, {
      data: message,
     maxWidth: '700px'
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

  public openDialogAccount(message: WalletDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(WalletDialogComponent, {
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
