import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarHeaderApplicationComponent} from './header/application/toolbar-header-application.component';
import {UseIdeToolbarListComponent} from './list/use-ide-toolbar-list.component';
import {UseIdeToolbarItemComponent} from './item/use-ide-toolbar-item.component';
import {UseIdeToolbarInfoComponent} from './info/use-ide-toolbar-info.component';
import {UseIdeToolbarPrintComponent} from './print/use-ide-toolbar-print.component';
import {UseIdeToolbarFormComponent} from './form/use-ide-toolbar-form.component';
import {ToolbarMaterial} from './toolbar.material';
import {UseIdeFindMainModule} from '../find/main/use-ide-find-main.module';
import {UseIdeToolbarTitleComponent} from './title/use-ide-toolbar-title.component';
import {UseIdeToolbarLogoComponent} from './logo/use-ide-toolbar-logo.component';
import {ToolbarHeaderContentComponent} from './header/content/toolbar-header-content.component';

const COMPONENTS: Array<any> = [
  ToolbarHeaderApplicationComponent,
  UseIdeToolbarListComponent,
  UseIdeToolbarItemComponent,
  UseIdeToolbarInfoComponent,
  UseIdeToolbarPrintComponent,
  UseIdeToolbarFormComponent,
  UseIdeToolbarTitleComponent,
  UseIdeToolbarLogoComponent,
  ToolbarHeaderContentComponent
];
const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  ToolbarMaterial,
  UseIdeFindMainModule
];


@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class ToolbarModule {
}
