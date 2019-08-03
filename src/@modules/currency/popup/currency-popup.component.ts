import { Component, OnInit } from '@angular/core';
import * as schema from './currency.schema.json';


@Component({
  selector: 'currency-popup',
  templateUrl: './currency-popup.template.html',
  styleUrls: ['./currency-popup.styles.scss']
})
export class CurrencyPopupComponent implements OnInit {

  constructor() {
    console.log(schema);
  }

  ngOnInit() {
  }

}
