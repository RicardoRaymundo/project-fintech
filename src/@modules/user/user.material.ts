import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

const MODULES: Array<any> = [
  CommonModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatSortModule
];


@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class UserMaterial {
}
