import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UseIdeMenuSidenavGroupComponent} from './sidenav/group/use-ide-menu-sidenav-group.component';
import {UseIdeMenuSidenavItemComponent} from './sidenav/item/use-ide-menu-sidenav-item.component';
import {UseIdeMenuMaterial} from './use-ide-menu.material';
import {UseIdeMenuToolsComponent} from './tools/use-ide-menu-tools.component';

const COMPONENTS: Array<any> = [
  UseIdeMenuSidenavGroupComponent,
  UseIdeMenuSidenavItemComponent,
  UseIdeMenuToolsComponent
];

const MODULES: Array<any> = [
  CommonModule,
  UseIdeMenuMaterial
];


@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES]
})

export class UseIdeMenuModule {
}
