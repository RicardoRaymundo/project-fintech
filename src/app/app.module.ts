import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {OutletsModule} from '../@plugins/outlets/outlets.module';
import {ToolbarModule} from '../@plugins/toolbar/toolbar.module';
import {WINDOW_PROVIDERS} from '../@plugins/utils/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new MultiTranslateHttpLoader(http, [
            {prefix: './assets/i18n/', suffix: '.json'}
          ]);
        },
        deps: [HttpClient]
      }
    }),
    MatToolbarModule,
    MatButtonModule,

    ToolbarModule,
    OutletsModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
