import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarHeaderApplicationComponent} from './application/toolbar-header-application.component';
import {UseIdeToolbarListComponent} from './list/use-ide-toolbar-list.component';
import {UseIdeToolbarItemComponent} from './item/use-ide-toolbar-item.component';
import {UseIdeToolbarInfoComponent} from './info/use-ide-toolbar-info.component';
import {UseIdeToolbarPrintComponent} from './print/use-ide-toolbar-print.component';
import {UseIdeToolbarFormComponent} from './form/use-ide-toolbar-form.component';
import {ToolbarMaterial} from './toolbar.material';
import {ToolbarFindHeaderModule} from './find-header/toolbar-find-header.module';
import {UseIdeToolbarTitleComponent} from './title/use-ide-toolbar-title.component';
import {UseIdeToolbarLogoComponent} from './logo/use-ide-toolbar-logo.component';

const COMPONENTS: Array<any> = [
  ToolbarHeaderApplicationComponent,
  UseIdeToolbarListComponent,
  UseIdeToolbarItemComponent,
  UseIdeToolbarInfoComponent,
  UseIdeToolbarPrintComponent,
  UseIdeToolbarFormComponent,
  UseIdeToolbarTitleComponent,
  UseIdeToolbarLogoComponent
];
const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  ToolbarMaterial,
  ToolbarFindHeaderModule
];


@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class ToolbarModule {
}
