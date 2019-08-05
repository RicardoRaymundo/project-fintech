import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActiveContentService} from '../../../content/active-content.service';


@Component({
  selector: 'toolbar-header-content',
  templateUrl: './toolbar-header-content.template.html'
})
export class ToolbarHeaderContentComponent implements OnInit {

  @Output() public menu: EventEmitter<any> = new EventEmitter();

  constructor(public activeContent: ActiveContentService) {
  }

  ngOnInit() {
  }

  public onToggleSideContent(): void {
    this.menu.emit();
  }

}
