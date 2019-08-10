import * as Cookies from 'es-cookie';
import {ClientStorageOptionsInterface} from './client-storage-options.interface';


export class ClientStorage {
  /**
   *
   */
  public static getAllKeys(): Array<string> {
    return Object.keys(Cookies.getAll() || {});
  }

  /**
   *
   * @param key
   */
  public static get<T extends object>(key: string): any {
    const value = Cookies.get(key);
    if (typeof value === 'undefined') {
      return;
    }
    return <T> JSON.parse(value);
  }

  /**
   *
   * @param key
   * @param value
   * @param options
   */
  public static save(key: string, value: any, options: ClientStorageOptionsInterface): void {
    Cookies.set(key, JSON.stringify(value), {
      expires: options.daysUntilExpire
    });
  }

  /**
   *
   * @param key
   */
  public static remove(key: string): void {
    Cookies.remove(key);
  }
}
