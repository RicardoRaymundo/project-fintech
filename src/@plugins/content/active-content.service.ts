import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveContentService {
  public icon: string;
  public label: string;
  public routerLink: string;

  constructor() { }
}
