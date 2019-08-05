import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseIdeFindMainComponent} from './use-ide-find-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UseIdeFindMaterial} from '../use-ide-find.material';

const COMPONENTS: Array<any> = [
  UseIdeFindMainComponent
];

const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  UseIdeFindMaterial
];


@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  entryComponents: [],
  providers: [],
  exports: [...COMPONENTS, ...MODULES]
})

export class UseIdeFindMainModule {
}
