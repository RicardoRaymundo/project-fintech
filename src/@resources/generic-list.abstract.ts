import {AfterViewInit, ElementRef, EventEmitter, Inject, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {EmailInterface} from './emails/email.interface';
import {FocusMonitor} from '@angular/cdk/a11y';
import {FormBuilder} from '@angular/forms';


export abstract class GenericListAbstract implements AfterViewInit {

  @ViewChild('editor', {static: true}) public editor: ElementRef;
  @ViewChild('btnAdd', {static: true}) public btnAdd: ElementRef;

  @Input() public showButtonAdd: boolean = true;
  @Input() public isEditorMode: boolean = false;

  @Output()
  public editorMode: EventEmitter<any> = new EventEmitter();

  public activeElement: any;
  public editComponent: any;
  public activeItem: any;

  constructor(@Inject(Renderer2) public renderer: Renderer2,
              @Inject(FocusMonitor) public focusMonitor: FocusMonitor) {
  }

  /**
   * Lista de dados para edição
   */
  protected _listData: Array<any> = [];

  public get listData(): Array<any> {
    return this._listData;
  }

  @Input()
  public set listData(value: Array<any>) {
    this._listData = value;
  }

  /**
   * Remove o focus do botão adicionar
   */
  public ngAfterViewInit() {
    const elements: HTMLCollection = document.getElementsByClassName('remove');

    for (const i in elements) {
      this.focusMonitor.stopMonitoring(<HTMLElement> (elements[i]));
    }
  }

  /**
   * Verifica se o item já existe na lista
   * Caso exista dispara alerta de erro
   * Caso não exista adiciona na lista
   * Implementar na classe filha
   * @param item
   * @private
   */
  public addItem(item: any): void {
  }

  /**
   * Abre modo de edição
   *
   * @param item
   * @param activeElement
   */
  public onEditItem(item: EmailInterface, activeElement: any): void {
    this.editComponent.data = item;
    this.activeItem = item;
    this.showHideEditor(true);

    //Verifica se tem algum elemento registrado para edição
    if (this.activeElement) {
      this.renderer.removeClass(this.activeElement, 'select-editor');
    }
    this.activeElement = activeElement;
    this.renderer.addClass(this.activeElement, 'select-editor');
  }

  /**
   * Cancela processo de edição
   */
  public onEditorCancel(): void {
    this.showHideEditor(false);
    if (this.activeElement) {
      this.renderer.removeClass(this.activeElement, 'select-editor');
    }
  }

  /**
   * Recebe email editado para atualizar a lista
   * @param item
   */
  public onEditorUpdate(item: any): void {
    if (this.activeElement) {
      Object.assign(this.activeItem, item);
      this.renderer.removeClass(this.activeElement, 'select-editor');
      this.showHideEditor(false);
    } else {
      this.addItem(item);
    }
  }

  /**
   * Remove item da lista
   * @param item
   */
  public remove(item: any): void {
    const index: number = this.listData.indexOf(item);
    this.listData.splice(index, 1);
    this.showHideEditor(false);
  }

  /**
   * Verifica se deve mostrar ou ocultar o editor
   * Habilita e deabilita botão de adicionar
   *
   * @param isShowEditor Status de visualização do editor
   * @private
   */
  public showHideEditor(isShowEditor: boolean): void {
    if (isShowEditor) {
      this.renderer.removeClass(this.editor.nativeElement, 'hidden');
      this.renderer.addClass(this.editor.nativeElement, 'display');
      this.renderer.setAttribute(this.btnAdd.nativeElement, 'disabled', 'true');
      this.editorMode.emit(true);
    } else {
      this.renderer.removeClass(this.editor.nativeElement, 'display');
      this.renderer.addClass(this.editor.nativeElement, 'hidden');
      this.renderer.removeAttribute(this.btnAdd.nativeElement, 'disabled');
      this.editorMode.emit(false);
    }
  }
}
