import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';

const MODULES: Array<any> = [
  MatButtonModule,
  MatDialogModule,
  MatCardModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES]
})
export class DialogMaterial {
}
