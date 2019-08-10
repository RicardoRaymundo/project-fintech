import {Component, Input} from '@angular/core';
import {EmailInterface} from '../email.interface';


@Component({
  selector: 'generic-emails-view',
  templateUrl: './generic-emails-view.template.html'
})
export class GenericEmailsViewComponent {

  /**
   * Lista de emails para edição
   */
  private _listData: Array<EmailInterface> = [];

  public get listData(): Array<EmailInterface> {
    return this._listData;
  }

  /**
   * Recebe a lista de emails do usuário
   * @param value
   */
  @Input()
  public set listData(value: Array<EmailInterface>) {
    this._listData = value;
  }

  public get value(): Array<EmailInterface> {
    return this.listData;
  }
}
