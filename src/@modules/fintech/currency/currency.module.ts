import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './list/currency-list.component';
import {CurrencyMaterial} from './currency.material';
import {CurrencyRouting} from './currency.routing';



@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    CurrencyMaterial,
    CurrencyRouting
  ]
})
export class CurrencyModule { }
