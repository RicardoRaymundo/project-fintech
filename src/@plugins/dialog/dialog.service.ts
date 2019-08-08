import {Inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOptionComponent} from './option/dialog-option.component';
import {DialogConfirmComponent} from './confirm/dialog-confirm.component';
import {DialogOptionInterface} from './option/dialog-option.interface';
import {DialogConfirmInterface} from './confirm/dialog-confirm.interface';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(@Inject(MatDialog) public dialog) {

  }

  public openConfirm(message: DialogConfirmInterface, confirm: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe((res: { option: string }): void => {
      if (res) {
        switch (res.option) {
          case 'confirm':
            if (confirm) {
              confirm();
            }
            break;
          case 'cancel':
            if (cancel) {
              cancel();
            }
            break;
        }
      }
    });
  }

  public openOption(message: DialogOptionInterface, confirm: () => void, neutral?: () => void, cancel?: () => void): void {
    const dialogRef = this.dialog.open(DialogOptionComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe((res: any): void => {
      if (res) {
        switch (res.option) {
          case 'confirm':
            if (confirm) {
              confirm();
            }
            break;
          case 'neutral':
            if (neutral) {
              neutral();
            }
            break;
          case 'cancel':
            if (cancel) {
              cancel();
            }
            break;
        }
      }
    });
  }

}
