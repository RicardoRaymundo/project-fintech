import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordMaterial} from './password.material';
import {PasswordInputComponent} from './input/password-input.component';

const COMPONENTS: Array<any> = [
  PasswordInputComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordMaterial
  ],
  exports: [...COMPONENTS]
})

export class PasswordModule {
}
