import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogConfirmInterface} from './dialog-confirm.interface';


@Component({
  selector: 'use-ide-dialog-confirm',
  templateUrl: 'dialog-confirm.template.html'
})
export class DialogConfirmComponent {
  public btnCancelLabel: string = 'Cancelar';
  public btnConfirmLabel: string = 'OK';

  constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogConfirmInterface) {

    this._config();
  }

  public onCancel(): void {
    this.dialogRef.close({option: 'cancel'});
  }

  public onConfirm(): void {
    this.dialogRef.close({option: 'confirm'});
  }

  private _config(): void {
    if (this.data.btnCancelLabel) {
      this.btnCancelLabel = this.data.btnCancelLabel;
    }
    if (this.data.btnConfirmLabel) {
      this.btnConfirmLabel = this.data.btnConfirmLabel;
    }
  }
}
