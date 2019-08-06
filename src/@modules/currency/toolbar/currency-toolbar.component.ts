import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'currency-toolbar',
  templateUrl: './currency-toolbar.template.html'
})
export class CurrencyToolbarComponent implements OnInit {

  @Output() public menu: EventEmitter<any> = new EventEmitter();
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

  public onToggleSideContent(): void {
    this.menu.emit();
  }

  public onEdit(): void {
    this.edit.emit();
  }

  public onPrint(): void {
    this.print.emit();
  }

  public onClick(value: string): void {

  }

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  public onBack(e: MouseEvent): void {
    this.location.back();
  }

}
