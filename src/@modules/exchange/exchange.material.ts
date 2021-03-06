import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

const MODULES: Array<any> = [
  CommonModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
];


@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class ExchangeMaterial {
}
