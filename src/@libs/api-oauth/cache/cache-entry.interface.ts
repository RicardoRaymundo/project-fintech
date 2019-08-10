import {DecodedTokenInterface} from '../jwt/decoded-token.interface';
import {CacheKeyDataInterface} from './cache-key-data.interface';


export interface CacheEntryInterface extends CacheKeyDataInterface {
  id_token: string;
  access_token: string;
  expires_in: number;
  decodedToken: DecodedTokenInterface;
}
