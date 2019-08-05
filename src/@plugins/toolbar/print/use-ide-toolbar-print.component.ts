import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2} from '@angular/core';
import {ToolbarMenuInterface} from '../toolbar-menu.interface';
import {ToolbarAbstract} from '../toolbar.abstract';
import {Platform} from '@angular/cdk/platform';
import {WINDOW} from '../../utils/window.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'use-ide-toolbar-print',
  templateUrl: './use-ide-toolbar-print.template.html'
})
export class UseIdeToolbarPrintComponent implements OnInit {
  /**
   * Evento disparado quando o botão voltar é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public back: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão anterior é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public chevronLeft: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão próximo é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public chevronRight: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão menu é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public menu: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão abrir em nova janela é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public openInNew: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão imprimir é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public print: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão atualizar é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public reload: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão configurações é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public settings: EventEmitter<any> = new EventEmitter();
  /**
   * Status habilita/desabilita o botão que leva para o conteúdo anterior
   * @type {boolean}
   */
  public disabledButtonChevronLeft: boolean = false;
  /**
   * Status habilita/desabilita o botão que leva para o conteúdo seguinte
   * @type {boolean}
   */
  public disabledButtonChevronRight: boolean = false;
  /**
   * Recebe a lista de elementos que compoem o menu de configurações
   * @type {any[]}
   */
  public listItemsMenuSettings: Array<ToolbarMenuInterface> = [{icon: 'open_in_new', label: 'Open in new'}];
  public listItemsMenu: Array<ToolbarMenuInterface> = [{icon: 'star', label: 'Open in newx'}];
  /**
   * Status mostra/oculta os botões anterior/próximo
   * @type {boolean}
   */
  public showButtonChevron: boolean = true;
  /**
   * Status mostra/oculta o botão mais menu
   * @type {boolean}
   */
  public showButtonMore: boolean = true;
  /**
   * Status mostra/oculta o botão abrir em nova janela
   * @type {boolean}
   */
  public showButtonOpenInNew: boolean = true;
  /**
   * Status mostra/oculta o botão imprimir
   * @type {boolean}
   */
  public showButtonPrint: boolean = true;
  /**
   * Status mostra/oculta o barra de progresso
   * @type {boolean}
   */
  public showProgress: boolean = false;
  private __id: string;

  /*constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              @Inject(Location) public location,
              @Inject(Platform) public platform,
              @Inject(WINDOW) public window: Window,
              @Inject(ElementRef) public elementRef,
              @Inject(Renderer2) public renderer) {
  }*/

  /**
   * Status mostra/oculta o botão configurações
   * @type {boolean}
   */
  private _showButtonSettings: boolean = true;

  public get showButtonSettings(): boolean {
    return this._showButtonSettings && (this.listItemsMenuSettings.length > 0);
  }

  public set showButtonSettings(value: boolean) {
    this._showButtonSettings = value;
  }

  ngOnInit() {
    /*this.activatedRoute.params.subscribe((params: any) => {
      if (params.hasOwnProperty('id')) {
        this.__id = params.id;
      }
    });*/
  }

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  public onBack(e: MouseEvent, c: any): void {
    // this.location.back();
    // this.back.emit();

    // console.log('LOCATION', location);
    /*if (location.pathname.substr(1, 5) === 'print') {
      this.window.close();
    } else {
      this.location.back();
      // this.back.emit();
    }*/

  }

  /**
   * Evento disparado quando o botão anterior é clicado
   */
  public onChevronLeft(): void {
    this.chevronLeft.emit();
  }

  /**
   * Evento disparado quando o botão próximo é clicado
   */
  public onChevronRight(): void {
    this.chevronRight.emit();
  }

  /**
   * Evento disparado quando o botão abrir em nova janela é clicado
   */
  public onOpenInNew(): void {
    this.openInNew.emit();
  }

  /**
   * Evento disparado quando o botão imprimir é clicado
   */
  public onPrint(): void {
    // this.window.print();
    // this.print.emit();
    // this.router.navigate(['/contratos/editar/' + this.__id]);
    // this.router.navigate(this.buttonAddNavigate);

    // console.log('location', location.origin + '/print' + location.pathname);

    // console.log('LOCATION', location);
    /*if (location.pathname.substr(1, 5) === 'print') {
      this.window.print();
    } else {
      this.window.open(location.origin + '/print' + location.pathname);
    }*/

  }

  /**
   * Evento disparado quando o botão atualizar é clicado
   */
  public onReload(e: MouseEvent, c: any): void {
    this.showProgress = !this.showProgress;
    this.reload.emit();
  }

  /**
   * Evento disparado quando o botão configurações é clicado
   */
  public onSettings(e: MouseEvent, c: any, item: ToolbarMenuInterface): void {
    this.settings.emit(item);
  }
}
