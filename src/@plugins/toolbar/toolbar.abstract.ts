import {UseComponentAbstract} from '../analytic/use-component.abstract';
import {Input} from '@angular/core';


export abstract class ToolbarAbstract extends UseComponentAbstract {
  @Input() public content: any;
}
