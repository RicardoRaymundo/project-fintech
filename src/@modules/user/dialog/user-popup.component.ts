import { Component, OnInit } from '@angular/core';
import * as schema from './user.schema.json';


@Component({
  selector: 'user-popup',
  templateUrl: './user-popup.template.html',
  styleUrls: ['./user-popup.styles.scss']
})
export class UserPopupComponent implements OnInit {

  constructor() {
    // console.log(schema);
  }

  ngOnInit() {
  }

}
