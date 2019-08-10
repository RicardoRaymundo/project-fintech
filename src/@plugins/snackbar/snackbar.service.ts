import {Inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarViewComponent} from './view/snackbar-view.component';
import {SnackbarViewInterface} from './view/snackbar-view.interface';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(@Inject(MatSnackBar) private snackBar: MatSnackBar) {
  }

  public open(data: SnackbarViewInterface): void {
    this.snackBar.openFromComponent(SnackbarViewComponent, {
      duration: 2500,
      'data': data
    });
  }
}
