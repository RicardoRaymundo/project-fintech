import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {WalletDialogInterface} from './wallet-dialog.interface';


@Component({
  selector: 'wallet-dialog',
  templateUrl: 'wallet-dialog.template.html',
  encapsulation: ViewEncapsulation.None
})
export class WalletDialogComponent {
  public btnCancelLabel: string = 'Cancelar';
  public btnConfirmLabel: string = 'OK';

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<WalletDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: WalletDialogInterface) {

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
