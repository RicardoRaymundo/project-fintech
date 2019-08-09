import { Component, OnInit } from '@angular/core';
import * as schema from './bank.schema.json';


@Component({
  selector: 'bank-popup',
  templateUrl: './bank-popup.template.html',
  styleUrls: ['./bank-popup.styles.scss']
})
export class BankPopupComponent implements OnInit {

  constructor() {
    // console.log(schema);
  }

  ngOnInit() {
  }

}
