import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackbarMaterial} from './snackbar.material';
import {SnackbarService} from './snackbar.service';
import {SnackbarViewComponent} from './view/snackbar-view.component';

const COMPONENTS: Array<any> = [
  SnackbarViewComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SnackbarMaterial
  ],
  entryComponents: [SnackbarViewComponent],
  exports: [...COMPONENTS],
  providers: [SnackbarService]
})

export class SnackbarModule {
}
