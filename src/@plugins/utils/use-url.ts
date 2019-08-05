import {parse} from 'url';
import * as _ from 'lodash';


export class UseUrl {

  public auth: any;
  public hash: string;
  public host: string;
  public uri: string;
  public base: string;
  public hostname: string;
  public href: string;
  public isSecure: boolean = false;
  public params: any;
  public path: string;
  public pathname: string;
  public pathlink: string;
  public port: string;
  public protocol: string;
  public query: string;
  public search: string;
  public slashes: boolean;
  public ready: boolean = false;

  constructor(href: string) {
    href = this._sanitize(href);
    if (href) {
      const url: any = parse(this._sanitize(href), false, true);

      // Configura propriedades na classe
      for (const i in url) {
        if (url.hasOwnProperty(i)) {
          this[i] = url[i];
        }
      }

      this._protocol();

      // Configura os parametros contidos na URI
      this.params = {};
      if (url.query) {
        const param: string = url.query;
        const query: Array<string> = param.split('&');
        if (query) {
          query.forEach((item: string) => {
            const value = item.split('=');
            this.params[(value[0])] = value[1];
          });
        }
      }
      this.ready = true;
    }
  }

  public static isValid(href: string): boolean {
    const useUrl: UseUrl = new UseUrl(href);
    return useUrl.ready;
  }

  private _protocol(): void {
    // Verifica se o protocolo é seguro
    this.isSecure = !!(this.protocol.match(/^https/im));
    this.protocol = this.isSecure ? 'https' : 'http';
    this.uri = this.protocol + '://' + this.hostname;
    this.pathlink = this.pathname.substr(1);

    this.base = this.protocol + '://' + this.hostname + (this.port ? ':' + this.port : '');
  }

  private _sanitize(href: string) {
    href = _.escape(href);
    const match: Array<any> = href.match(/^(http|https):([\s\S]*?)$/im);
    if (match) {
      match[2] = (match[2]).replace(/^\//im, '').replace(/^\//im, '');
      return match[1] + '://' + match[2];
    }
  }
}
