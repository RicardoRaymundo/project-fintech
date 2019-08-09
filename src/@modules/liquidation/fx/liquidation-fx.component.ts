import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'liquidation-fx',
  templateUrl: './liquidation-fx.template.html',
  styleUrls: ['./liquidation-fx.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LiquidationFxComponent implements OnInit {

  constructor(@Inject(TranslateService) public translateService: TranslateService,
              @Inject(TranslateConfig) public translateConfig: TranslateConfig,
              @Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute) {

    // Implementa internacionalização
    this._configTranslate();
  }

  public ngOnInit(): void {

  }

  /**
   * Configura componentes de internacionalização
   */
  private _configTranslate(): void {
    const REGEX: any = /en|pt/;
    this.translateService.addLangs(['en', 'pt']);
    this.translateService.setDefaultLang(this.translateConfig.defaultLanguage);
    this.translateService.use(this.translateConfig.activeLang(REGEX));
    this.translateConfig.changeLang.subscribe((language) => {
      this.translateService.use(language);
    });
  }
}
