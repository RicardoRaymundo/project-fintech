import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GenericPhonesMaterial} from './generic-phones.material';
import {GenericPhonesListComponent} from './list/generic-phones-list.component';
import {GenericPhonesEditComponent} from './edit/generic-phones-edit.component';
import {GenericPhonesViewComponent} from './view/generic-phones-view.component';

const COMPONENTS: Array<any> = [
  GenericPhonesListComponent,
  GenericPhonesEditComponent,
  GenericPhonesViewComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenericPhonesMaterial
  ],
  exports: [...COMPONENTS]
})

export class GenericPhonesModule {
}
