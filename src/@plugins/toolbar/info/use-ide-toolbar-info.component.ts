import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'use-ide-toolbar-info',
  templateUrl: './use-ide-toolbar-info.template.html'
})
export class UseIdeToolbarInfoComponent implements OnInit {

  //@Output('close') public close: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public onClose(): void {
    //this.close.emit();
    //this.useIdePlatform.closeSideInfo();
  }
}
