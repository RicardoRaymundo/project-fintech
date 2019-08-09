import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyListComponent} from './list/currency-list.component';


const routes: Routes = [
  {
    path: 'configuration',
    redirectTo: 'currency'
  },
  {
    path: 'currency',
    component: CurrencyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRouting { }
