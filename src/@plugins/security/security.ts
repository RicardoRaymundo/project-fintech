/*
var uuids = angular.module('uuids', []);
uuids.factory("rfc4122", function () {
  return {
    newuuid: function () {
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      return s.join("");
    }
  }
});
*/

import * as CryptoJS from 'crypto-js';
// https://gist.github.com/caiguanhao/9446527
// https://code.google.com/archive/p/crypto-js/

export class Security {
  private static _instance: Security = new Security();

  constructor() {
    if (Security._instance) {
      throw new Error('Error: Instantiation failed: Use Security.method() static.');
    }
  }

  /**
   * Gera um identificador similar no formato mongodb objectId
   */
  public static objectId(): string {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  }

  /**
   *
   * @param id
   */
  public static uid(id?: string): string {
    const regexUid: any = /^[0-9A-F]{6}-[0-9A-F]{6}-[0-9A-F]{6}-[0-9A-F]{6}$/i;
    const regexObjectId: any = /^[0-9a-f]{24}$/i;

    // Verifica se a uid já existe
    if (regexUid.test(id)) {
      return id;
    }
    // Verifica se o id não é do tipo objectID
    else if (!id) {
      id = Security.objectId();
    } else {
      id = Security.sha1(id);
    }
    id = id.toUpperCase();
    return id.substr(0, 6) + '-' + id.substr(6, 6) + '-' + id.substr(12, 6) + '-' + id.substr(18, 6);
  }

  /**
   * Gera um identificador de 8 digitos
   */
  public static shortId(str): string {
    const hash = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
    return hash.substr(0, 1) + hash.substr(3, 1) + hash.substr(7, 1) + hash.substr(11, 1) + hash.substr(15, 1) +
      hash.substr(19, 1) + hash.substr(23, 1) + hash.substr(27, 1) + hash.substr(31, 1) + hash.substr(35, 1);
  }

  /**
   * Gera um hash sha1
   */
  public static sha1(str): string {
    return CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
  }

  public static aesEncrypt(str, secret): any {
    const encrypted = CryptoJS.AES.encrypt(str, secret);
    return encrypted.toString();
  }

  public static aesDecrypt(encrypted, secret): string {
    const decrypted = CryptoJS.AES.decrypt(encrypted, secret);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  /**
   * Codifica para base64
   */
  public static base64encode(str: string): string {
    const parse: any = CryptoJS.enc.Utf8.parse(str);
    return CryptoJS.enc.Base64.stringify(parse);
  }

  /**
   * Decodifica base64 para UTF-8
   */
  public static base64decode(str: string): string {
    const parse: any = CryptoJS.enc.Base64.parse(str);
    return parse.toString(CryptoJS.enc.Utf8);
  }

  /**
   * Gerador de senha seguras
   */
  public static generatePassword(passwordLenght: number = 8, lowercase: boolean = true, uppercase: boolean = true, numbers: boolean = true, symbols: boolean = false): string {

    if (lowercase === false && uppercase === false && numbers === false && symbols === false) {
      return '...';
    }
    const NUMBERS: Array<string> = ('0123456789').split('');
    const LOWER_CASE: Array<string> = ('abcdefghijklmnopqrstuvwxyz').split('');
    const UPPER_CASE: Array<string> = ('ABCDEFGHIJKLMNOPWRSTUVWXYZ').split('');
    const SIMBOLS: Array<string> = ('!@#$%^&*-_=+\\|:;\',.\<>/?~').split('');

    // Create array from chosen checkboxes
    const dictionary: Array<string> = [].concat(
      lowercase ? LOWER_CASE : [],
      uppercase ? UPPER_CASE : [],
      numbers ? NUMBERS : [],
      symbols ? SIMBOLS : []
    );

    // Generate random password from array
    let newPassword: string = '';
    let numActions: number = 0;

    if (lowercase) {
      numActions++;
      newPassword += LOWER_CASE[Math.floor(Math.random() * LOWER_CASE.length)];
    }

    if (uppercase) {
      numActions++;
      newPassword += UPPER_CASE[Math.floor(Math.random() * UPPER_CASE.length)];
    }

    if (numbers) {
      numActions++;
      newPassword += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    }

    if (symbols) {
      numActions++;
      newPassword += SIMBOLS[Math.floor(Math.random() * SIMBOLS.length)];
    }

    for (let i = 0; i < (passwordLenght - numActions); i++) {
      newPassword += dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    return newPassword;
  }

  /**
   * Oculta parte de um email para proteger informação
   */
  public static protectEmail(email: string): string {
    const match: Array<any> = email.match(/^(.+)@(.+)$/i);
    if (match) {
      let value: string = match[1];
      value = value.substr(0, 1) + value.substr(1, (value).length - 2).replace(/(.)/ig, '*') + value.substr(-1);
      return value + '@' + match[2];
    }
  }

}
