import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PluginErrorRouting} from './plugin-error.routing';
import {PluginErrorMaterial} from './plugin-error.material';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PluginErrorMaterial,
    PluginErrorRouting
  ]
})

export class PluginErrorModule {
}
