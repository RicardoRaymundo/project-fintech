import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GenericAddressMaterial} from './generic-address.material';
import {GenericAddressViewComponent} from './view/generic-address-view.component';
import {GenericAddressListComponent} from './list/generic-address-list.component';
import {GenericAddressEditComponent} from './edit/generic-address-edit.component';

const COMPONENTS: Array<any> = [
  GenericAddressEditComponent,
  GenericAddressListComponent,
  GenericAddressViewComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenericAddressMaterial
  ],
  exports: [...COMPONENTS]
})

export class GenericAddressModule {
}
