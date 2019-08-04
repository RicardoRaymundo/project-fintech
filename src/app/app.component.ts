import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.styles.scss']
})
export class AppComponent {
  title = 'project-fintech';

  constructor(private translate: TranslateService) {

    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    console.log('browserLang', browserLang);
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  public useLanguage(language: string) {
    this.translate.use(language);
  }
}
