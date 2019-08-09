import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'account-toolbar',
  templateUrl: './account-toolbar.template.html'
})
export class AccountToolbarComponent implements OnInit {

  @Output() public addItem: EventEmitter<any> = new EventEmitter();
  @Output() public back: EventEmitter<any> = new EventEmitter();

  @Input() public label: string;

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  @Output()
  public edit: EventEmitter<any> = new EventEmitter();

  @Output()
  public print: EventEmitter<any> = new EventEmitter();

  public appearance: string;

  constructor(@Inject(Location) public location) {
  }

  ngOnInit() {

  }

  public onAddItem(): void {
    this.addItem.emit();
  }

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  public onBack(e: MouseEvent): void {
    this.location.back();
  }

}
