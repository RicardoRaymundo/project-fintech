import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccountMaterial} from './account.material';
import {AccountRouter} from './account.router';
import {AccountProfileComponent} from './profile/account-profile.component';
import {AccountSettingsUsernameComponent} from './profile/username/account-settings-username.component';
import {AccountSettingsProfileComponent} from './profile/profile/account-settings-profile.component';
import {AccountSettingsStatusComponent} from './profile/status/account-settings-status.component';
import {AccountHistoryComponent} from './history/account-history.component';
import {AccountSecurityComponent} from './security/account-security.component';
import {AccountSessionsComponent} from './sessions/account-sessions.component';
import {GenericDashboardModule} from '../../@resources/dashboard/generic-dashboard.module';
import {AccountProfileUserComponent} from './profile/user/account-profile-user.component';
import {AccountProfileAvatarComponent} from './profile/avatar/account-profile-avatar.component';
import {SettingsProfileUserComponent} from './profile/profile/user/settings-profile-user.component';
import {GenericAddressModule} from '../../@resources/address/generic-address.module';
import {GenericPhonesModule} from '../../@resources/phones/generic-phones.module';
import {GenericEmailsModule} from '../../@resources/emails/generic-emails.module';
import {GenerateTokenFormComponent} from './generate-token/form/generate-token-form.component';
import {AccountValidationComponent} from './validation/account-validation.component';
import {AccountSettingsEmailsComponent} from './profile/emails/account-settings-emails.component';
import {AccountSettingsPasswordComponent} from './profile/password/account-settings-password.component';
import {AccountSettingsNotificationsComponent} from './profile/notifications/account-settings-notifications.component';
import {AccountSettingsConfigComponent} from './profile/config/account-settings-config.component';
import {ForgotPasswordMainComponent} from './forgot-password/main/forgot-password-main.component';
import {SignupFormComponent} from './signup/form/signup-form.component';
import {SignupSuccessComponent} from './signup/success/signup-success.component';
import {ValidationFailedComponent} from './validation/failed/validation-failed.component';
import {ForgotPasswordSuccessComponent} from './forgot-password/success/forgot-password-success.component';
import {PasswordModule} from '../../@resources/password/password.module';
import {LoginComponent} from './login/login.component';
import {ResetPasswordFormComponent} from './reset-password/form/reset-password-form.component';
import {LogoutComponent} from './logout/logout.component';


const COMPONENTS: Array<any> = [
  AccountSettingsEmailsComponent,
  AccountSettingsPasswordComponent,
  AccountProfileComponent,
  AccountProfileUserComponent,
  SettingsProfileUserComponent,
  AccountProfileAvatarComponent,
  AccountSettingsNotificationsComponent,
  AccountSettingsProfileComponent,
  AccountSettingsStatusComponent,
  AccountSettingsUsernameComponent,
  AccountHistoryComponent,
  AccountSessionsComponent,
  AccountSecurityComponent,
  AccountSettingsConfigComponent,
  GenerateTokenFormComponent,
  AccountValidationComponent,
  ValidationFailedComponent,
  ForgotPasswordMainComponent,
  ForgotPasswordSuccessComponent,
  SignupFormComponent,
  SignupSuccessComponent,
  LoginComponent,
  LogoutComponent,
  ResetPasswordFormComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountMaterial,
    AccountRouter,
    GenericDashboardModule,
    GenericAddressModule,
    GenericPhonesModule,
    GenericEmailsModule,
    GenericAddressModule,
    PasswordModule
  ],
  exports: [...COMPONENTS]
})

export class AccountModule {
}
