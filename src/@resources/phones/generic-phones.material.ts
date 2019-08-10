import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

const MODULES: Array<any> = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatTooltipModule,
  MatSnackBarModule
];


@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})

export class GenericPhonesMaterial {
}


