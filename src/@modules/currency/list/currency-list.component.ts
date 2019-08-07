import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatSort} from '@angular/material';
import {exist} from '@use-pattern/utils';


export interface PeriodicElement {
  _id: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {_id: '1', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {_id: '2', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {_id: '3', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {_id: '4', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {_id: '5', position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {_id: '6', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {_id: '7', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {_id: '8', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {_id: '9', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {_id: '10', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'star'];
  dataSource = ELEMENT_DATA;
  public selectedIndex: string | any;
  public selectedItem: any;

  constructor(@Inject(TranslateService) public translateService: TranslateService,
              @Inject(TranslateConfig) public translateConfig: TranslateConfig,
              @Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute) {

    // Implementa internacionalização
    this._configTranslate();
  }

  public ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
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
