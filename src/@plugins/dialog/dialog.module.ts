import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogConfirmComponent} from './confirm/dialog-confirm.component';
import {DialogOptionComponent} from './option/dialog-option.component';
import {DialogMaterial} from './dialog.material';
import {MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

const COMPONENTS: Array<any> = [
  DialogConfirmComponent,
  DialogOptionComponent,
];


@NgModule({
  imports: [
    CommonModule,
    DialogMaterial
  ],
  declarations: COMPONENTS,
  entryComponents: [
    DialogConfirmComponent,
    DialogOptionComponent
  ],
  // TODO: Implementar tradução dinâmica para data
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  exports: COMPONENTS
})

export class DialogModule {
}
