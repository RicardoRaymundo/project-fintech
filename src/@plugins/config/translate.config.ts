import {EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslateConfig {
  @Output() public changeLang: EventEmitter<any> = new EventEmitter();
  private _activeLang: string;

  constructor(@Inject(TranslateService) public translateService: TranslateService) {
  }

  /**
   *
   */
  public get defaultLanguage(): string {
    return 'en';
  }

  /**
   * Registra a linguagem que deve ser utilizada
   * @param language
   */
  public use(language: string): string {
    this._activeLang = language;
    this.changeLang.emit();
    localStorage.setItem('i18n', language);
    return this._activeLang;
  }

  /**
   * Recupera a linguagem que deve ser utilizada
   * @param regex
   */
  public activeLang(regex: any): string {
    // Verifica se tem uma liguagem default configurada
    // Caso não tenha
    //  Verifica se tem uma configuração de linguagem registrada no localStorage
    // Caso não tenha nada registrado no localstorage
    //  Recupera a configuração do browser ou retorna o idioma default ingles
    if (!this._activeLang) {
      const language: string = localStorage.getItem('i18n');
      if (language) {
        this._activeLang = language;
      } else {
        const browserLang = this.translateService.getBrowserLang();
        this._activeLang = (browserLang.match(regex) ? browserLang : this.defaultLanguage);
      }
    }
    return this._activeLang;
  }
}
