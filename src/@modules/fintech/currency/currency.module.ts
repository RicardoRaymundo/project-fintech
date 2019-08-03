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

// stackblitz.com/github/RicardoRaymundo/project-fintech
// https://github.com/RicardoRaymundo/project-fintech/tree/0989d3770cea2a46dcf5f6f6f26f34077b8b80b1
// https://github.com/RicardoRaymundo/project-fintech
