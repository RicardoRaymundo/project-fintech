import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToolbarMenuInterface} from '../toolbar-menu.interface';


@Component({
  selector: 'use-ide-toolbar-list',
  templateUrl: './use-ide-toolbar-list.template.html'
})
export class UseIdeToolbarListComponent {

  @Input() public label: string;
  @Input() public showButtonBack: boolean = true;

  /**
   * Evento disparado quando o botão voltar é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public back: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão menu é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public menu: EventEmitter<any> = new EventEmitter();
  /**
   * Evento disparado quando o botão atualizar é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public reload: EventEmitter<any> = new EventEmitter();
  /**
   * Recebe o endereço que deve ser acessado para edição
   */
  @Input()
  public routerEdit: string;

  /**
   * Evento disparado quando o botão configurações é clicado
   * @type {EventEmitter<any>}
   */
  @Output()
  public settings: EventEmitter<any> = new EventEmitter();

  /**
   * Status habilita/desabilita botão editar
   */
  public disableButtonEdit: boolean = true;

  /**
   * Recebe a lista de elementos que compoem o menu de configurações
   * @type {any[]}
   */
  public listItemsMenuSettings: Array<ToolbarMenuInterface> = [{icon: 'open_in_new', label: 'Open in new'}];
  public listItemsMenu: Array<ToolbarMenuInterface> = [{icon: 'star', label: 'Open in newx'}];

  /**
   * Status mostra/oculta o botão mais menu
   * @type {boolean}
   */
  public showButtonMore: boolean = true;

  /**
   * Aramzena o item selecionado na lista para edição
   */
  public selectedItem: any;

  /*constructor(public router: Router,
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

  /**
   * Status mostra/oculta o barra de progresso
   * @type {boolean}
   */
  private _showProgress: boolean = false;

  public get showProgress(): boolean {
    return this._showProgress;
  }

  public set showProgress(value: boolean) {
    this._showProgress = value;
  }

  /**
   * Evento disparado quando o botão voltar é clicado
   */
  public onBack(e: MouseEvent, c: any): void {
    // this.location.back();
  }

  /**
   * Evento disparado quando o botão editar é clicado
   */
  public onEdit(e: MouseEvent, c: any): void {
    if (this.routerEdit) {
      this.routerEdit += '/' + this.selectedItem['_id'];

      console.log('this.routerEdi', this.routerEdit);

      // this.router.navigate([this.routerEdit]);
    } else {
      console.error('Error Router', 'Nenhuma rota de edição foi configurada em', this.constructor.name);
    }
  }

  public onToggleSideContent(): void {
    this.menu.emit();
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

  public editSelected(item: any): void {
    this.disableButtonEdit = false;
    this.selectedItem = item;
  }

  /**
   * Evento disparado quando o botão deletar é clicado
   */
  public onDelete(e: MouseEvent, c: any): void {
  }
}

