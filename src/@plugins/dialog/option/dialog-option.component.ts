import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogOptionInterface} from './dialog-option.interface';


@Component({
  selector: 'use-ide-dialog-option',
  templateUrl: 'dialog-option.template.html'
})
export class DialogOptionComponent {
  public btnCancelLabel: string = 'Cancelar';
  public btnConfirmLabel: string = 'OK';
  public btnOptionLabel: string = 'Option';


  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<DialogOptionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogOptionInterface) {

    this._config();
  }

  public onCancel(): void {
    this.dialogRef.close({option: 'cancel'});
  }

  public onConfirm(): void {
    this.dialogRef.close({option: 'confirm'});
  }

  public onOption(): void {
    this.dialogRef.close({option: 'neutral'});
  }

  private _config(): void {
    if (this.data.btnCancelLabel) {
      this.btnCancelLabel = this.data.btnCancelLabel;
    }
    if (this.data.btnConfirmLabel) {
      this.btnConfirmLabel = this.data.btnConfirmLabel;
    }
    if (this.data.btnOptionLabel) {
      this.btnOptionLabel = this.data.btnOptionLabel;
    }
  }
}
