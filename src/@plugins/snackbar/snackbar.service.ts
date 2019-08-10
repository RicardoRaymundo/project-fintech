import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarViewComponent} from './view/snackbar-view.component';
import {SnackbarViewInterface} from './view/snackbar-view.interface';


@Injectable()
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  public open(data: SnackbarViewInterface): void {
    this.snackBar.openFromComponent(SnackbarViewComponent, {
      duration: 2500,
      data: data
    });
  }
}
