import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'boletagem-toolbar',
  templateUrl: './boletagem-toolbar.template.html'
})
export class BoletagemToolbarComponent implements OnInit {

  @Output() public addItemTrade: EventEmitter<any> = new EventEmitter();
  @Output() public addItemFX: EventEmitter<any> = new EventEmitter();

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

  public onAddItemTrade(): void {
    this.addItemTrade.emit();
  }
  public onAddItemFX(): void {
    this.addItemFX.emit();
  }

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  public onBack(e: MouseEvent): void {
    this.location.back();
  }

}
