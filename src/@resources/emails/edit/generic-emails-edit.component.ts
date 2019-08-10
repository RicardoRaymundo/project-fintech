import {Component, Inject, Input} from '@angular/core';
import {EmailInterface} from '../email.interface';
import {FormBuilder} from '@angular/forms';
import {GenericEmailsSchema} from '../generic-emails.schema';
import {GenericEditAbstract} from '../../generic-edit.abstract';
import {GenericEditInterface} from '../../generic-edit.interface';


@Component({
  selector: 'generic-emails-edit',
  templateUrl: './generic-emails-edit.template.html'
})
export class GenericEmailsEditComponent extends GenericEditAbstract implements GenericEditInterface {

  constructor(@Inject(FormBuilder) public formBuilder) {
    super(formBuilder, GenericEmailsSchema.VALIDATORS);
  }

  /**
   * Dados do email
   */
  private _data: EmailInterface;

  public get data(): EmailInterface {
    return this._data;
  }

  @Input()
  public set data(value: EmailInterface) {
    this._data = value;
    this.populateForm();
  }

  /**
   * Evento disparado quando o usuário cancela a edição
   */
  public onCancelEdit(): void {
    this.formGroup = this.formBuilder.group(GenericEmailsSchema.VALIDATORS);
    this.cancel.emit();
  }

  /**
   * Popula item de formulário com dados recebido do formulário pai
   */
  public populateForm(): void {
    this.formGroup.patchValue({address: this.data.address});
  }
}
