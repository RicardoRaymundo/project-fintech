import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './list/user-list.component';
import {UserMaterial} from './user.material';
import {UserRouting} from './user.routing';
import {UserPopupComponent} from './dialog/user-popup.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {ToolbarModule} from '../../@plugins/toolbar/toolbar.module';
import {UserToolbarComponent} from './toolbar/user-toolbar.component';
import {UserDialogComponent} from './dialog/user-dialog.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/currency/languages/', suffix: '.json'},
  ]);
}


@NgModule({
  declarations: [
    UserListComponent,
    UserPopupComponent,
    UserToolbarComponent,
    UserDialogComponent
  ],
  entryComponents: [
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    UserMaterial,
    UserRouting,

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
export class UserModule {
}
