import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule, MatChipsModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const MODULES: Array<any> = [
  MatBadgeModule,
  MatButtonModule,
  MatChipsModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTooltipModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES]
})
export class ToolbarMaterial {
}
