import {CacheEntryInterface} from './cache-entry.interface';
import {CacheKeyDataInterface} from './cache-key-data.interface';
import {CachedTokensInterface} from './cached-tokens.interface';

const createKey = (e: CacheKeyDataInterface) => `${e.audience}::${e.scope}`;

export default class CacheManager {
  private _cache: CachedTokensInterface = {};

  public save(entry: CacheEntryInterface) {
    const key = createKey(entry);
    this._cache[key] = entry;
    const timeout = this._getExpirationTimeoutInMilliseconds(
      entry.expires_in,
      entry.decodedToken.claims.exp
    );
    setTimeout(() => {
      delete this._cache[key];
    }, timeout);
  }

  /**
   *
   * @param key
   */
  public get(key: CacheKeyDataInterface) {
    return this._cache[createKey(key)];
  }

  /**
   *
   * @param expiresIn
   * @param exp
   * @private
   */
  public _getExpirationTimeoutInMilliseconds(expiresIn: number, exp: number): number {
    const expTime =
      (new Date(exp * 1000).getTime() - new Date().getTime()) / 1000;
    return Math.min(expiresIn, expTime) * 1000;
  };
}
