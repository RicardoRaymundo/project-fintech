import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExchangeListComponent} from './list/exchange-list.component';
import {ExchangeWalletComponent} from './wallet/exchange-wallet.component';


const routes: Routes = [
  {
    path: 'exchange',
    component: ExchangeListComponent
  },
  {
    path: 'exchange/wallets',
    component: ExchangeWalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRouting { }
