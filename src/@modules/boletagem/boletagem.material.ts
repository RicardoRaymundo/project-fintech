import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';


const MODULES: Array<any> = [
  CommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatSortModule
];


@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class BoletagemMaterial {
}
