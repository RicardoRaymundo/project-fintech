import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

const MODULES: Array<any> = [
  MatSidenavModule,
  MatProgressBarModule,
  MatMenuModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTooltipModule,
];


@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})

export class AccountMaterial {
}


