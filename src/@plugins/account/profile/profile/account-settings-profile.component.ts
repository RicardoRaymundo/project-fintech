import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'account-settings-profile',
  templateUrl: './account-settings-profile.template.html'
})
export class AccountSettingsProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  @HostListener('window:resize', ['$event'])
  public onResize(event?: any) {
    if (event.target.innerWidth > 1920) {
      console.log(event.target.innerWidth, 'xl');
    }
    else if (event.target.innerWidth > 1600) {
      console.log(event.target.innerWidth, 'lgm');
    }
    else if (event.target.innerWidth > 1440) {
      console.log(event.target.innerWidth, 'lg');
    }
    else if (event.target.innerWidth > 1280) {
      console.log(event.target.innerWidth, 'mdm');
    }
    else if (event.target.innerWidth > 1024) {
      console.log(event.target.innerWidth, 'md');
    }
    else if (event.target.innerWidth > 960) {
      console.log(event.target.innerWidth, 'smb');
    }
    else if (event.target.innerWidth > 840) {
      console.log(event.target.innerWidth, 'smm');
    }
    else if (event.target.innerWidth > 600) {
      console.log(event.target.innerWidth, 'sm');
    }
    else if (event.target.innerWidth > 400) {
      console.log(event.target.innerWidth, 'xsb');
    }
    else if (event.target.innerWidth > 360) {
      console.log(event.target.innerWidth, 'xsm');
    }
    else {
      console.log(event.target.innerWidth, 'xs');
    }
  }

}
