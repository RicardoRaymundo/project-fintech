import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'toolbar-application',
  templateUrl: './toolbar-application.template.html',
  styleUrls: ['./toolbar-application.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarApplicationComponent implements OnInit {
  public userAvatar: string = 'https://angular.io/generated/images/bios/julie-ralph.jpg';
  public userName: string = 'Israel Agoeiro';

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
