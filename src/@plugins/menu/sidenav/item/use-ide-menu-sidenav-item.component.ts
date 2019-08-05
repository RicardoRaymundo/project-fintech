import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {UseIdeMenuSidenavItemInterface} from './use-ide-menu-sidenav-item.interface';
import {UseComponentAbstract} from '../../../analytic/use-component.abstract';


@Component({
  selector: 'use-ide-sidenav-menu-item',
  templateUrl: './use-ide-menu-sidenav-item.template.html'
})

export class UseIdeMenuSidenavItemComponent extends UseComponentAbstract {
  @Input() public showBadge: boolean;
  @Input() public showMiniBadge: boolean;
  @Input() public showSubMenu: boolean;
  @Input() public showProgress: boolean;
  @Input() public showMenuOption: boolean;
  @Input() public selected: boolean;
  @Input() public icon: string = 'check_circle_outline';
  @Input() public groupOpened: boolean;
  @Input() public label: string;

  @Output('clicked') public clicked: EventEmitter<any> = new EventEmitter();

  private _itemOpened: boolean;

  public get itemOpened(): boolean {
    return this._itemOpened;
  }

  @Input()
  public set itemOpened(value: boolean) {
    this._itemOpened = value;
  }

  private _itemData: UseIdeMenuSidenavItemInterface;

  public get itemData(): UseIdeMenuSidenavItemInterface {
    return this._itemData;
  }

  @Input()
  public set itemData(value: UseIdeMenuSidenavItemInterface) {
    if (value) {
      for (const i in value) {
        this[i] = value[i];
      }
    }
    this._itemData = value;
  }

  public get arrowIcon(): string {
    return this._itemOpened ? 'arrow_drop_down' : 'arrow_right';
  }

  public onClick(): void {
    this.clicked.emit(this.label);
  }
}
