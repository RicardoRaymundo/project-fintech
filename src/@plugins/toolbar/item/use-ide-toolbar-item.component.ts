import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'use-ide-toolbar-item',
  templateUrl: './use-ide-toolbar-item.template.html'
})
export class UseIdeToolbarItemComponent implements OnInit {

  @Output('menu') public menu: EventEmitter<any> = new EventEmitter();
  @Output('back') public back: EventEmitter<any> = new EventEmitter();

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
