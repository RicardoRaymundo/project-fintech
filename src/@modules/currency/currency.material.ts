import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

const MODULES: Array<any> = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class CurrencyMaterial {
}
