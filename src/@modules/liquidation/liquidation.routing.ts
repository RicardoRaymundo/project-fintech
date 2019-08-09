import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LiquidationListComponent} from './list/liquidation-list.component';
import {LiquidationTradeComponent} from './trade/liquidation-trade.component';
import {LiquidationFxComponent} from './fx/liquidation-fx.component';


const routes: Routes = [
  {
    path: 'liquidation',
    component: LiquidationListComponent
  },
  {
    path: 'liquidation/trade',
    component: LiquidationTradeComponent
  },
  {
    path: 'liquidation/fx',
    component: LiquidationFxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRouting { }
