import {Component, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatBottomSheetConfig} from '@angular/material';
import {UseIdeMenuSidenavGroupComponent} from '../../menu/sidenav/group/use-ide-menu-sidenav-group.component';
import {UseIdeMenuSidenavItemInterface} from '../../menu/sidenav/item/use-ide-menu-sidenav-item.interface';

const defaultConfig = new MatBottomSheetConfig();


@Component({
  selector: 'outlets-application-sidenav',
  templateUrl: './outlets-application-sidenav.template.html'
})
export class OutletsApplicationSidenavComponent implements OnInit {
  @ViewChild(UseIdeMenuSidenavGroupComponent, {static: true}) public sidenavMenuGroup: UseIdeMenuSidenavGroupComponent;
  @ViewChild('bottomSheet', {static: true}) public template: TemplateRef<any>;
  @ViewChild('outLetInfo', {read: ViewContainerRef, static: true}) outLetInfo: ViewContainerRef;
  public menuOpened: boolean = true;
  public menuOpenedTmp: boolean = false;
  public menuOpenedControl: boolean = true;
  public sidenaveMenuMode: string = 'side';
  public config: MatBottomSheetConfig = {
    hasBackdrop: defaultConfig.hasBackdrop,
    disableClose: defaultConfig.disableClose,
    backdropClass: defaultConfig.backdropClass,
    direction: 'ltr'
  };
  public listSidenaveMenu: Array<UseIdeMenuSidenavItemInterface> = [
    {
      icon: 'account_circle',
      label: 'Clientes',
      routerLink: '/my-apps/lav-company/clientes',
      routerLinkNew: '/my-apps/lav-company/clientes/adicionar',
      showMenuOption: true
    },
    {
      icon: 'receipt',
      label: 'Contratos',
      routerLink: '/my-apps/lav-company/contratos',
      routerLinkNew: '/my-apps/lav-company/contratos/adicionar',
      showBadge: false,
      showMiniBadge: false,
      showSubMenu: false,
      showProgress: false
    },
    {
      icon: 'list_alt',
      label: 'Serviços',
      routerLink: '/my-apps/lav-company/servicos',
      routerLinkNew: '/my-apps/lav-company/servicos/adicionar',
      showBadge: false,
      showMiniBadge: false,
      showSubMenu: false,
      showProgress: false
    },
    {
      icon: 'receipt',
      label: 'Nota de Débito',
      routerLink: '/my-apps/lav-company/nota-de-debito',
      routerLinkNew: '/my-apps/lav-company/nota-de-debito/adicionar',
      showBadge: false,
      showMiniBadge: false,
      showSubMenu: false,
      showProgress: false
    }
  ];
  public screenHeight: number;
  public pagePrint: boolean = false;
  public pageWelcome: boolean = false;
  public pageLogin: boolean = false;

  /*constructor(@Inject(Location) public location,
              @Inject(WINDOW) public window: Window,
              public router: Router,
              private _bottomSheet: MatBottomSheet) {
    this.onResize();
  }*/

  public get sideInfoOpened(): boolean {
    // return this.useIdePlatform.sideInfoOpened;
    return false;
  }

  public get showTools(): boolean {
    // return this.useIdePlatform.showTools;
    return true;
  }

  ngOnInit() {

    if (this.sidenavMenuGroup) {
      this.sidenavMenuGroup.ngOnInit(true);
    }

    // console.log('LOCATION', location);
    if (location.pathname.substr(1, 5) === 'print') {
      this.pagePrint = true;
      // this.window.print();
    } else if (location.pathname === '/') {
      this.pageWelcome = true;
    } else if (location.pathname === '/login') {
      this.pageLogin = true;
    }

  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?) {
    // this.screenHeight = this.window.innerHeight - 65;
    // console.log(this.window.innerHeight);
  }

  public onActivate(component: any) {
    // this.window.scroll(0, 0);
  }

  public onToggleSideContent(): void {
    this.menuOpenedControl = !this.menuOpenedControl;
  }

  public onOpenedSideMenu(): void {
    this.menuOpenedControl = true;
  }

  public onClosedSideMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.menuOpenedControl = !this.menuOpenedControl;
  }

  public onResizeMenu(mode: string): void {
    this.sidenaveMenuMode = mode;
    this.menuOpenedTmp = (mode === 'side');
  }

  public openTemplate(): void {
    // this._bottomSheet.open(this.template, this.config);
  }

}
