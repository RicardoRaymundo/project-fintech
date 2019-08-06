import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarFindHeaderComponent} from './toolbar-find-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarFindHeaderMaterial} from './toolbar-find-header.material';

const COMPONENTS: Array<any> = [
  ToolbarFindHeaderComponent
];

const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ToolbarFindHeaderMaterial
];


@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  entryComponents: [],
  exports: [...COMPONENTS, ...MODULES]
})

export class ToolbarFindHeaderModule {
}
