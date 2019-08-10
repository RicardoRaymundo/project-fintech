import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material';

const MODULES: Array<any> = [
  MatSnackBarModule
];


@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})

export class SnackbarMaterial {
}


