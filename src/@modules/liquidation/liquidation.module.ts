import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiquidationListComponent} from './list/liquidation-list.component';
import {LiquidationMaterial} from './liquidation.material';
import {LiquidationRouting} from './liquidation.routing';
import {LiquidationPopupComponent} from './dialog/liquidation-popup.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {LiquidationToolbarComponent} from './toolbar/liquidation-toolbar.component';
import {LiquidationDialogComponent} from './dialog/liquidation-dialog.component';
import {LiquidationTradeComponent} from './trade/liquidation-trade.component';
import {TradeTransactionsToolbarComponent} from './trade/transactions/toolbar/trade-transactions-toolbar.component';
import {TradeTransactionsComponent} from './trade/transactions/trade-transactions.component';
import {TransactionsDialogComponent} from './trade/transactions/dialog/transactions-dialog.component';
import {TradeBankComponent} from './trade/bank/trade-bank.component';
import {BankDialogComponent} from '../bank/dialog/bank-dialog.component';
import {TradeBankDialogComponent} from './trade/bank/dialog/trade-bank-dialog.component';
import {TradeBankToolbarComponent} from './trade/bank/toolbar/trade-bank-toolbar.component';
import {LiquidationFxComponent} from './fx/liquidation-fx.component';
import {FxContractsToolbarComponent} from './fx/contracts/toolbar/fx-contracts-toolbar.component';
import {FxContractsComponent} from './fx/contracts/fx-contracts.component';
import {ContractDialogComponent} from './fx/contracts/dialog/contract-dialog.component';
import {DialogFxComponent} from '../boletagem/dialog/fx/dialog-fx.component';
import {DialogTradeComponent} from '../boletagem/dialog/trade/dialog-trade.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    LiquidationListComponent,
    LiquidationPopupComponent,
    LiquidationToolbarComponent,
    LiquidationDialogComponent,
    LiquidationTradeComponent,
    TradeTransactionsToolbarComponent,
    TradeTransactionsComponent,
    TransactionsDialogComponent,
    TradeBankComponent,
    TradeBankDialogComponent,
    TradeBankToolbarComponent,
    LiquidationFxComponent,
    FxContractsToolbarComponent,
    FxContractsComponent,
    ContractDialogComponent,
    DialogFxComponent,
    DialogTradeComponent
  ],
  entryComponents: [
    LiquidationDialogComponent,
    TransactionsDialogComponent,
    TradeBankDialogComponent,
    TradeBankToolbarComponent,
    FxContractsToolbarComponent,
    ContractDialogComponent,
    DialogFxComponent,
    DialogTradeComponent
  ],
  imports: [
    CommonModule,
    LiquidationMaterial,
    LiquidationRouting,

    ToolbarModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class LiquidationModule {
}
