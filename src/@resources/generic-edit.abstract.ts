import {EventEmitter, Inject, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


export abstract class GenericEditAbstract {
  @Output() public cancel: EventEmitter<any> = new EventEmitter();
  @Output() public update: EventEmitter<any> = new EventEmitter();
  public formGroup: FormGroup; // Grupo de elementos do formulário angular

  constructor(@Inject(FormBuilder) public formBuilder: FormBuilder,
              validators: any) {
    this.formGroup = formBuilder.group(validators);
  }

  /**
   * Evento disparado quando o usuário atualiza os dados de um elemento da lista
   */
  public onUpdateEdit(): void {
    this.update.emit(this.formGroup.value);
  }
}
