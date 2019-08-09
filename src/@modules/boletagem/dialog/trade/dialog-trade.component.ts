import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogTradeInterface} from './dialog-trade.interface';


@Component({
  selector: 'dialog-trade',
  templateUrl: 'dialog-trade.template.html',
  encapsulation: ViewEncapsulation.None
})
export class DialogTradeComponent {
  public btnCancelLabel: string = 'Cancelar';
  public btnConfirmLabel: string = 'OK';

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<DialogTradeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogTradeInterface) {

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
