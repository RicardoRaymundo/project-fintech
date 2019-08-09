import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {DialogLiquidationComponent} from './liquidation/dialog-liquidation.component';
import {DialogDuplicateComponent} from './duplicate/dialog-duplicate.component';
import {DialogFxComponent} from './fx/dialog-fx.component';
import {DialogTradeComponent} from './trade/dialog-trade.component';
import {BoletagemMaterial} from '../boletagem.material';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    DialogTradeComponent,
    DialogFxComponent,
    DialogDuplicateComponent,
    DialogLiquidationComponent
  ],
  entryComponents: [
    DialogTradeComponent,
    DialogFxComponent,
    DialogDuplicateComponent,
    DialogLiquidationComponent
  ],
  imports: [
    CommonModule,
    BoletagemMaterial,

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
export class BoletagemDialogModule {
}
