import {Component, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {UseIdeMenuSidenavItemComponent} from '../item/use-ide-menu-sidenav-item.component';
import {UseIdeMenuSidenavItemInterface} from '../item/use-ide-menu-sidenav-item.interface';


@Component({
  selector: 'use-ide-menu-sidenav-group',
  templateUrl: './use-ide-menu-sidenav-group.templates.html'
})
export class UseIdeMenuSidenavGroupComponent implements OnInit {
  @ViewChildren(UseIdeMenuSidenavItemComponent)
  public listSidenavMenuItem: QueryList<UseIdeMenuSidenavItemComponent>;

  @Output()
  public resize: EventEmitter<any> = new EventEmitter();

  public localOpened: boolean = undefined;
  public buttonAddTitle: string;
  public buttonAddNavigate: Array<string>;

  /*constructor(public router: Router,
              public activeContent: ActiveContentService) {
  }*/

  private _listData: Array<UseIdeMenuSidenavItemInterface>;

  public get listData(): Array<UseIdeMenuSidenavItemInterface> {
    return this._listData;
  }

  @Input('listData')
  public set listData(value: Array<UseIdeMenuSidenavItemInterface>) {
    this._listData = value;
    this._buttonAdd();
  }

  private _opened: boolean;

  public get opened(): boolean {
    return this._opened;

  }

  @Input('opened')
  public set opened(value: boolean) {
    this._opened = value;
  }

  private _openedTmp: boolean;

  public get openedTmp(): boolean {
    return this._openedTmp;
  }

  @Input('openedTmp')
  public set openedTmp(value: boolean) {
    this._openedTmp = value;
  }

  @HostListener('mouseenter') mouseEnter() {
    if (!this.opened) {
      this.resize.emit('over');
      this.localOpened = true;
    }
  }

  @HostListener('mouseleave') mouseLeave() {
    if (!this.opened) {
      this.resize.emit('side');
      this.localOpened = undefined;
    }
  }

  ngOnInit(opened?: boolean) {
    if (opened) {
      this.opened = opened;
      this.openedTmp = opened;
    }
  }

  public onButtonAdd(): void {
    // this.router.navigate(this.buttonAddNavigate);
  }

  public onClicked(sidenavMenuItem: UseIdeMenuSidenavItemInterface): void {
    if (sidenavMenuItem.hasOwnProperty('routerLink')) {
      this._buttonAdd(sidenavMenuItem);
      /*this.router.navigate([sidenavMenuItem.routerLink]);

      // Configura informações global do conteúdo ativo
      this.activeContent.icon = sidenavMenuItem.icon;
      this.activeContent.label = sidenavMenuItem.label;
      this.activeContent.routerLink = sidenavMenuItem.routerLink;
*/
      console.log('sidenavMenuItem', sidenavMenuItem);
    } else {
      console.error('ERROR:: SidenavMenuItem ', 'Não foi definido routerLink para o item do menu:', sidenavMenuItem.label);
    }
  }

  private _buttonAdd(item?: UseIdeMenuSidenavItemInterface) {
    if (this.listData.length) {
      if (item === undefined) {
        item = this.listData[0];
      }
      if (item.label && item.routerLinkNew) {
        this.buttonAddTitle = 'Adicionar ' + item.label;
        this.buttonAddNavigate = [item.routerLinkNew];
      }
    }
  }
}
