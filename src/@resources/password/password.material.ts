import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule,} from '@angular/material';

const MODULES: Array<any> = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];


@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})

export class PasswordMaterial {
}


