import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyListComponent} from './list/currency-list.component';
import {CurrencyMaterial} from './currency.material';
import {CurrencyRouting} from './currency.routing';
import {CurrencyPopupComponent} from './dialog/currency-popup.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {CurrencyToolbarComponent} from './toolbar/currency-toolbar.component';
import {CurrencyDialogComponent} from './dialog/currency-dialog.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyPopupComponent,
    CurrencyToolbarComponent,
    CurrencyDialogComponent
  ],
  entryComponents: [
    CurrencyDialogComponent
  ],
  imports: [
    CommonModule,
    CurrencyMaterial,
    CurrencyRouting,

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
export class CurrencyModule {
}
