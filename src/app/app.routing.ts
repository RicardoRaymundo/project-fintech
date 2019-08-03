import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'xxx',
  loadChildren: () => import('../@modules/fintech/currency/currency.module').then(m => m.CurrencyModule)
}];


// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
