import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginErrorModule} from './error/plugin-error.module';
import {DialogModule} from './dialog/dialog.module';

const MODULES: Array<any> = [
  PluginErrorModule,
  DialogModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: MODULES
})

export class PluginPlatformModule {
}
