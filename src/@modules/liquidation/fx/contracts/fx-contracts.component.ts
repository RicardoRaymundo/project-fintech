import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {exist} from '@use-pattern/utils';
import {TranslateConfig} from '../../../../@plugins/config/translate.config';
import {DialogService} from '../../../../@plugins/dialog/dialog.service';
import {ContractDialogInterface} from './dialog/contract-dialog.interface';
import {ContractDialogComponent} from './dialog/contract-dialog.component';


export interface PeriodicElement {
  _id: string;
  number: string;
  value_brl: string;
  value_usd: string;
  rate: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', number: '13526482254', value_brl: 'R$ 458.544,00', value_usd: '$ 254.365,42', rate: '0.7'},
  {_id: '2', number: '85632458744', value_brl: 'R$ 365.852,00', value_usd: '$ 120.000,00', rate: '0.7'},
];


@Component({
  selector: 'fx-contracts',
  templateUrl: './fx-contracts.template.html',
  styleUrls: ['./fx-contracts.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FxContractsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public displayedColumns: string[] = ['number', 'value_brl', 'value_usd', 'rate', 'menu'];
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
      title: 'Adicionar Contrato',
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
      title: 'Editar Contrato',
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
    const item: any = {title: '1352682254'};

    // Abre janela de dialogo para confirmar exclusão
    this.useIdeDialog.openConfirm({
      title: 'Excluir Contrato',
      message: `Tem certeza de que deseja mover o contrato '${item.title}' para a Lixeira?`,
      complement: '1352682254 (BRL: R$ 458.544,00 / USD: $ 254.365,42)',
      type: 'Contrato',
      created_at: '27/07/2019 15:22',
      btnConfirmLabel: 'Sim',
      btnCancelLabel: 'Não'
    }, () => {
      this.remove(item);
    });
  }

  public openDialogAccount(message: ContractDialogInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(ContractDialogComponent, {
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
