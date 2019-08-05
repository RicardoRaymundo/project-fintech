import {ElementRef, Inject, Renderer2} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {WINDOW} from '../utils/window.service';
import {Location} from '@angular/common';


export abstract class UseComponentAbstract {
  public name: string;


  /*constructor(@Inject(Location) public location,
              @Inject(Platform) public platform,
              @Inject(WINDOW) public window: Window,
              @Inject(ElementRef) public elementRef,
              @Inject(Renderer2) public renderer) {
    this._setDefaultClass();
  }*/

  public addClass(className: string): UseComponentAbstract {
    // this.renderer.addClass(this.elementRef.nativeElement, className);
    return this;
  }

  private _setDefaultClass(): void {

    /*const localName: string = this.elementRef.nativeElement.localName;
    const listName: Array<string> = localName.split('-');

    if (listName && listName.length) {
      const len: number = listName.length;
      let className: string = '';
      className = className + listName[0];
      for (let i = 1; i < len; i++) {
        className += '-' + listName[i];
        this.renderer.addClass(this.elementRef.nativeElement, className);
      }
    }*/
  }

}
