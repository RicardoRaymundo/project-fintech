import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TransactionsDialogInterface} from './transactions-dialog.interface';


@Component({
  selector: 'account-dialog',
  templateUrl: 'transactions-dialog.template.html',
  encapsulation: ViewEncapsulation.None
})
export class TransactionsDialogComponent {
  public btnCancelLabel: string = 'Cancelar';
  public btnConfirmLabel: string = 'OK';

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<TransactionsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TransactionsDialogInterface) {

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
