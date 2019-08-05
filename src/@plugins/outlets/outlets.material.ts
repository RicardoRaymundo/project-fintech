import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatBottomSheetModule, MatListModule, MatSidenavModule} from '@angular/material';

const MODULES: Array<any> = [
  MatSidenavModule,
  MatListModule,
  MatBottomSheetModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES]
})
export class OutletsMaterial {
}
