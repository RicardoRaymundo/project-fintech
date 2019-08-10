import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconComponent} from './svg-icon.component';
import {SvgLoaderDirective} from './svg-loader.directive';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS: Array<any> = [
  SvgIconComponent,
  SvgLoaderDirective
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class SvgIconModule {
}
