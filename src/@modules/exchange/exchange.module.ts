import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangeListComponent} from './list/exchange-list.component';
import {ExchangeMaterial} from './exchange.material';
import {ExchangeRouting} from './exchange.routing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {ExchangeToolbarComponent} from './toolbar/exchange-toolbar.component';
import {ExchangeDialogComponent} from './dialog/exchange-dialog.component';
import {WalletDialogComponent} from './wallet/dialog/wallet-dialog.component';
import {WalletToolbarComponent} from './wallet/toolbar/wallet-toolbar.component';
import {ExchangeWalletComponent} from './wallet/exchange-wallet.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}

@NgModule({
  declarations: [
    ExchangeListComponent,
    ExchangeToolbarComponent,
    ExchangeDialogComponent,
    ExchangeWalletComponent,
    WalletDialogComponent,
    WalletToolbarComponent
  ],
  entryComponents: [
    ExchangeDialogComponent,
    WalletDialogComponent
  ],
  imports: [
    CommonModule,
    ExchangeMaterial,
    ExchangeRouting,

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
export class ExchangeModule {
}
