import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountProfileComponent} from './profile/account-profile.component';
import {AccountSettingsUsernameComponent} from './profile/username/account-settings-username.component';
import {AccountSettingsProfileComponent} from './profile/profile/account-settings-profile.component';
import {AccountSettingsStatusComponent} from './profile/status/account-settings-status.component';
import {AccountHistoryComponent} from './history/account-history.component';
import {AccountSessionsComponent} from './sessions/account-sessions.component';
import {AccountSecurityComponent} from './security/account-security.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordMainComponent} from './forgot-password/main/forgot-password-main.component';
import {SignupFormComponent} from './signup/form/signup-form.component';
import {SignupSuccessComponent} from './signup/success/signup-success.component';
import {AccountValidationComponent} from './validation/account-validation.component';
import {GenerateTokenFormComponent} from './generate-token/form/generate-token-form.component';
import {AccountSettingsEmailsComponent} from './profile/emails/account-settings-emails.component';
import {AccountSettingsPasswordComponent} from './profile/password/account-settings-password.component';
import {AccountSettingsConfigComponent} from './profile/config/account-settings-config.component';
import {AccountSettingsNotificationsComponent} from './profile/notifications/account-settings-notifications.component';
import {ResetPasswordFormComponent} from './reset-password/form/reset-password-form.component';
import {ValidationFailedComponent} from './validation/failed/validation-failed.component';
import {ForgotPasswordSuccessComponent} from './forgot-password/success/forgot-password-success.component';
import {LogoutComponent} from './logout/logout.component';

const ROUTES: Routes = [
  {
    path: 'account',
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'history', component: AccountHistoryComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'forgot-password', component: ForgotPasswordMainComponent},
      {path: 'forgot-password-success', component: ForgotPasswordSuccessComponent},
      {path: 'reset-password', component: ResetPasswordFormComponent},
      {path: 'generate-token', component: GenerateTokenFormComponent},
      {path: 'profile', component: AccountProfileComponent},
      {path: 'sessions', component: AccountSessionsComponent},
      {path: 'settings/profile', component: AccountSettingsProfileComponent},
      {path: 'settings/status', component: AccountSettingsStatusComponent},
      {path: 'settings/username', component: AccountSettingsUsernameComponent},
      {path: 'settings/emails', component: AccountSettingsEmailsComponent},
      {path: 'settings/password', component: AccountSettingsPasswordComponent},
      {path: 'settings/config', component: AccountSettingsConfigComponent},
      {path: 'settings/notifications', component: AccountSettingsNotificationsComponent},
      {path: 'security', component: AccountSecurityComponent},
      {path: 'signup', component: SignupFormComponent},
      {path: 'signup/success', component: SignupSuccessComponent},
      {path: 'validation', component: AccountValidationComponent},
      {path: 'validation-failed', component: ValidationFailedComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AccountRouter {
}
