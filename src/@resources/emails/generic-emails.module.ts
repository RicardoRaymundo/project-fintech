import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GenericEmailsMaterial} from './generic-emails.material';
import {GenericEmailsListComponent} from './list/generic-emails-list.component';
import {GenericEmailsEditComponent} from './edit/generic-emails-edit.component';
import {DialogModule} from '../../@plugins/dialog/dialog.module';
import {SnackbarModule} from '../../@plugins/snackbar/snackbar.module';
import {GenericEmailsViewComponent} from './view/generic-emails-view.component';

const COMPONENTS: Array<any> = [
  GenericEmailsListComponent,
  GenericEmailsEditComponent,
  GenericEmailsViewComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenericEmailsMaterial,
    SnackbarModule,
    DialogModule
  ],
  exports: [...COMPONENTS]
})

export class GenericEmailsModule {
}
