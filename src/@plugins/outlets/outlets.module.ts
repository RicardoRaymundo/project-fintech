import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OutletsMaterial} from './outlets.material';
import {OutletsApplicationSidenavComponent} from './application-sidenav/outlets-application-sidenav.component';
import {UseIdeMenuModule} from '../menu/use-ide-menu.module';
import {ToolbarModule} from '../toolbar/toolbar.module';


const COMPONENTS: Array<any> = [
  OutletsApplicationSidenavComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    OutletsMaterial,
    ToolbarModule,
    UseIdeMenuModule
  ],
  exports: [...COMPONENTS]
})

export class OutletsModule {
}
