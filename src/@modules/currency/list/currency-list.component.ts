import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {DialogService} from '../../../@plugins/dialog/dialog.service';
import {CurrencyDialogInterface} from '../dialog/currency-dialog.interface';
import {CurrencyDialogComponent} from '../dialog/currency-dialog.component';


export interface PeriodicElement {
  _id: string;
  name: string;
  alphabetic_code: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', name: 'Bitcoin', alphabetic_code: 'BTC'},
  {_id: '2', name: 'Dolar', alphabetic_code: 'USD'},
  {_id: '3', name: 'Tether', alphabetic_code: 'USDT'}
];


@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.template.html',
  styleUrls: ['./currency-list.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['name', 'alphabetic_code', 'menu'];
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
      title: 'Adicionar Moeda',
      message: `Tem certeza de que deseja mover o e-mail '${item.address}' para a Lixeira?`,
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
      title: 'Editar Moeda',
      message: `Tem certeza de que deseja mover o e-mail '${item.address}' para a Lixeira?`,
      complement: 'Bitcoin (BTC)',
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
    const item: any = {address: 'Bitcoin'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Moeda',
      message: `Tem certeza de que deseja mover a moeda '${item.address}' para a Lixeira?`,
      complement: 'Bitcoin (BTC)',
      btnConfirmLabel: 'Remover'
    }, () => {
      this.remove(item);
    });
  }

  public openDialog(message: CurrencyDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: message,
      minWidth: '450px'
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
      console.log('BBBBBBBBBBBBBBBBBBBBB');
      this.translateService.use(language);
    });
  }
}
