import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutletsApplicationSidenavComponent} from '../@plugins/outlets/application-sidenav/outlets-application-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/bank/bank.module').then(m => m.BankModule)
  },
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/exchange/exchange.module').then(m => m.ExchangeModule)
  },
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/liquidation/liquidation.module').then(m => m.LiquidationModule)
  },
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/boletagem/boletagem.module').then(m => m.BoletagemModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
