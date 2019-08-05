import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateConfig} from '../../../@plugins/config/translate.config';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.template.html',
  styleUrls: ['./currency-list.styles.scss']
})
export class CurrencyListComponent implements OnInit {

  /*constructor(public translateService: TranslateService,
              public translateConfig: TranslateConfig,
              private _activatedRoute: ActivatedRoute) {

    // Implementa internacionalização
    this._configTranslate();

    this._activatedRoute.params.subscribe((params: any) => {
      console.log('PARAMS', params);
    });
  }*/

  ngOnInit() {
  }

  /**
   * Configura componentes de internacionalização
   */
  private _configTranslate(): void {
    const REGEX: any = /en|pt/;
    /*this.translateService.addLangs(['en', 'pt']);
    this.translateService.setDefaultLang(this.translateConfig.defaultLanguage);
    this.translateService.use(this.translateConfig.activeLang(REGEX));
    this.translateConfig.changeLang.subscribe(() => {
      this.translateService.use(this.translateConfig.activeLang(REGEX));
    });*/
  }
}
