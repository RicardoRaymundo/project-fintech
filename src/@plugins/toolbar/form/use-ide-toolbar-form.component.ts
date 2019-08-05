import {Component, ElementRef, EventEmitter, Inject, Input, Output, Renderer2} from '@angular/core';
import {ToolbarAbstract} from '../toolbar.abstract';
import {Platform} from '@angular/cdk/platform';
import {WINDOW} from '../../utils/window.service';
import {Location} from '@angular/common';
import {ToolbarMenuInterface} from '../toolbar-menu.interface';


@Component({
  selector: 'use-ide-toolbar-form',
  templateUrl: './use-ide-toolbar-form.template.html'
})
export class UseIdeToolbarFormComponent extends ToolbarAbstract {

  @Input() public label: string;

  /**
   * Evento disparado quando o botão cancelar é clicado, deve revomer todos os campos digitados
   * @type {EventEmitter<any>}
   */
  @Output()
  public cancel: EventEmitter<any> = new EventEmitter();

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
   * Evento disparado quando o botão salvar é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public save: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão configurações é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public settings: EventEmitter<any> = new EventEmitter();
  /**
   * Recebe a lista de elementos que compoem o menu de configurações
   * @type {any[]}
   */
  public listItemsMenuSettings: Array<ToolbarMenuInterface> = [{icon: 'open_in_new', label: 'Open in new'}];
  public listItemsMenu: Array<ToolbarMenuInterface> = [{icon: 'star', label: 'Open in newx'}];

  constructor(@Inject(Location) public location,
              @Inject(Platform) public platform,
              @Inject(WINDOW) public window: Window,
              @Inject(ElementRef) public elementRef,
              @Inject(Renderer2) public renderer) {
    super(location, platform, window, elementRef, renderer);
  }

  /**
   * Status mostra/oculta o barra de progresso
   * @type {boolean}
   */
  private _showProgress: boolean = false;

  get showProgress(): boolean {
    return this._showProgress;
  }

  set showProgress(value: boolean) {
    this._showProgress = value;
  }

  /**
   * Evento disparado quando o botão voltar é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   */
  public onBack(e: MouseEvent, c: any): void {
    this.location.back();
  }

  /**
   * Evento disparado quando o botão anterior é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   */
  public onCancel(e: MouseEvent, c: any): void {
    this.showProgress = false;
    this.cancel.emit();
  }

  /**
   * Evento disparado quando o botão deletar é clicado
   */
  public onDelete(e: MouseEvent, c: any): void {
  }

  /**
   * Evento disparado quando o botão atualizar é clicado
   */
  public onReload(e: MouseEvent, c: any): void {
    this.showProgress = !this.showProgress;
    if (this.content.hasOwnProperty('reload')) {
      this.content.reload();
    } else {
      console.error('O conteúdo não tem resurso de atualizar definido', this.constructor.name);
    }
  }

  /**
   * Evento disparado quando o botão salvar é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   */
  public onSave(e: MouseEvent, c: any): void {
    this.showProgress = true;
    this.save.emit();
  }

  /**
   * Evento disparado quando o botão abrir em nova janela é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   */
  public onOpenInNew(e: MouseEvent, c: any): void {
    this.openInNew.emit();
  }

  /**
   * Evento disparado quando o botão imprimir é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   */
  public onPrint(e: MouseEvent, c: any): void {
    this.print.emit();
  }

  /**
   * Evento disparado quando o botão configurações é clicado
   *
   * @param {MouseEvent} e Evento de mause
   * @param c Elemento html clicado
   * @param {ToolbarMenuInterface} item Configuração do menu
   */
  public onSettings(e: MouseEvent, c: any, item: ToolbarMenuInterface): void {
    this.settings.emit(item);
  }
}
