import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BankListComponent} from './list/bank-list.component';
import {BankAccountComponent} from './account/bank-account.component';


const routes: Routes = [
  {
    path: 'bank',
    component: BankListComponent
  },
  {
    path: 'bank/accounts',
    component: BankAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRouting { }
