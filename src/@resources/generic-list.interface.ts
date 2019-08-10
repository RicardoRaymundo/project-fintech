import {ElementRef} from '@angular/core';


export interface GenericListInterface {
  activeElement: any;
  activeItem: any;
  btnAdd: ElementRef;
  editComponent: any;
  editor: ElementRef;
  listData: Array<any>;
  showButtonAdd: boolean;

  addItem(item: any): void;

  onEditItem(item: any, activeElement: any): void;

  onEditorCancel(): void;

  onEditorUpdate(item: any): void;

  onRemoveItem(item: any): void;

  onShowAddEditItem(): void;

  remove(item: any): void;

  showHideEditor(isShowEditor: boolean): void;
}
