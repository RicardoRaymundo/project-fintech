import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserLockscreenComponent} from '../lockscreen/user-lockscreen.component';
import {UserRouter} from './user.router';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS: Array<any> = [
  UserLockscreenComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    UserRouter
  ],
  exports: [...COMPONENTS]
})

export class UserModule {
}
