import {Component, Inject} from '@angular/core';
import {UserManager} from '../../../user/user.manager';


@Component({
  selector: 'account-profile-user',
  templateUrl: './account-profile-user.template.html'
})
export class AccountProfileUserComponent {

  constructor(@Inject(UserManager) public user: UserManager) {
  }
}
