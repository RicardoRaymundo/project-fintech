import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatBadgeModule, MatButtonModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';

const MODULES: Array<any> = [
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES]
})
export class UseIdeMenuMaterial {
}
