import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {SnackbarViewInterface} from './snackbar-view.interface';


@Component({
  selector: 'app-view',
  templateUrl: './snackbar-view.template.html'
})
export class SnackbarViewComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarViewInterface) {
    console.log('data', data);
  }

  ngOnInit() {
  }

}
