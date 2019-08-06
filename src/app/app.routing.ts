import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutletsApplicationSidenavComponent} from '../@plugins/outlets/application-sidenav/outlets-application-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: OutletsApplicationSidenavComponent,
    loadChildren: () => import('../@modules/currency/currency.module').then(m => m.CurrencyModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
