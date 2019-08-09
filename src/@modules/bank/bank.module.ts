import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BankListComponent} from './list/bank-list.component';
import {BankMaterial} from './bank.material';
import {BankRouting} from './bank.routing';
import {BankPopupComponent} from './dialog/bank-popup.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {BankToolbarComponent} from './toolbar/bank-toolbar.component';
import {BankDialogComponent} from './dialog/bank-dialog.component';
import {BankAccountComponent} from './account/bank-account.component';
import {AccountToolbarComponent} from './account/toolbar/account-toolbar.component';
import {AccountDialogComponent} from './account/dialog/account-dialog.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    BankListComponent,
    BankPopupComponent,
    BankToolbarComponent,
    BankDialogComponent,
    BankAccountComponent,
    AccountToolbarComponent,
    AccountDialogComponent
  ],
  entryComponents: [
    BankDialogComponent,
    AccountDialogComponent
  ],
  imports: [
    CommonModule,
    BankMaterial,
    BankRouting,

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
export class BankModule {
}
