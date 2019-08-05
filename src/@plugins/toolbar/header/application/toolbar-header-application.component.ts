import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {WINDOW} from '../../../utils/window.service';


@Component({
  selector: 'toolbar-header-application',
  templateUrl: './toolbar-header-application.template.html'
})
export class ToolbarHeaderApplicationComponent implements OnInit {

  @Output() public menu: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  /*constructor(public router: Router,
              @Inject(Location) public location,
              @Inject(Platform) public platform,
              @Inject(WINDOW) public window: Window,
              @Inject(ElementRef) public elementRef,
              @Inject(Renderer2) public renderer) {
  }
*/
  public onToggleSideContent(): void {
    this.menu.emit();
  }

  public onClickProfile(): void {
    // this.router.navigate(['/account/profile']);
  }

  public onClickAccountSettings(): void {
    // this.router.navigate(['/account/settings']);
  }

  public onClickApplication(): void {
    // this.router.navigate(['/my-apps/lav-company']);
  }

  public onClickExit(): void {
    // this.router.navigate(['/lockscreen']);
  }

  public onClickAdmin(): void {
    // this.router.navigate(['/admin']);
  }

  public onApi(): void {
    // this.router.navigate(['/tools/api/endpoints']);
  }
}
