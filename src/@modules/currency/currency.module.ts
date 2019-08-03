import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyListComponent} from './list/currency-list.component';
import {CurrencyMaterial} from './currency.material';
import {CurrencyRouting} from './currency.routing';
import {CurrencyPopupComponent} from './popup/currency-popup.component';


@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyPopupComponent
  ],
  imports: [
    CommonModule,
    CurrencyMaterial,
    CurrencyRouting
  ]
})
export class CurrencyModule {
}
