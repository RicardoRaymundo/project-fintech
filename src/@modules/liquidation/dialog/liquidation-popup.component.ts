import { Component, OnInit } from '@angular/core';
import * as schema from './liquidation.schema.json';


@Component({
  selector: 'user-popup',
  templateUrl: './liquidation-popup.template.html',
  styleUrls: ['./liquidation-popup.styles.scss']
})
export class LiquidationPopupComponent implements OnInit {

  constructor() {
    // console.log(schema);
  }

  ngOnInit() {
  }

}
