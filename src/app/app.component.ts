import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.styles.scss']
})
export class AppComponent {
  title = 'project-fintech';

  constructor(@Inject(TranslateService) public translateService: TranslateService,
              @Inject(TranslateConfig) public translateConfig: TranslateConfig,
              @Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute) {

    // Implementa internacionalização
    this._configTranslate();
   }

  public changeLanguage(language: string) {
    this.translateService.use(this.translateConfig.use(language));
  }

  /**
   * Configura componentes de internacionalização
   */
  private _configTranslate(): void {
    const REGEX: any = /en|pt/;
    this.translateService.addLangs(['en', 'pt']);
    this.translateService.setDefaultLang(this.translateConfig.defaultLanguage);
    this.translateService.use(this.translateConfig.activeLang(REGEX));
    this.translateConfig.changeLang.subscribe(() => {
      this.translateService.use(this.translateConfig.activeLang(REGEX));
    });
  }
}
