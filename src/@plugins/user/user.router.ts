import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  /*
  {path: 'lockscreen', component: UserLockscreenComponent},
  {path: 'user/login', component: LoginFormComponent},
  {path: 'user/signup', component: SignupFormComponent},
  {path: 'user/signup/message', component: SignupMessageComponent},
  {path: 'user/account/validate', component: AccountValidateTokenComponent},
  {path: 'user/account/generate/token', component: AccountGenerateTokenComponent},*/
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UserRouter {
}
