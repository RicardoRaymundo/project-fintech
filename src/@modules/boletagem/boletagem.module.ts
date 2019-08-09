import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoletagemListComponent} from './list/boletagem-list.component';
import {BoletagemMaterial} from './boletagem.material';
import {BoletagemRouting} from './boletagem.routing';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {BoletagemToolbarComponent} from './toolbar/boletagem-toolbar.component';
import {DialogTradeComponent} from './dialog/trade/dialog-trade.component';
import {DialogFxComponent} from './dialog/fx/dialog-fx.component';
import {DialogDuplicateComponent} from './dialog/duplicate/dialog-duplicate.component';
import {DialogLiquidationComponent} from './dialog/liquidation/dialog-liquidation.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    BoletagemListComponent,
    BoletagemToolbarComponent,
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
    BoletagemRouting,

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
export class BoletagemModule {
}
