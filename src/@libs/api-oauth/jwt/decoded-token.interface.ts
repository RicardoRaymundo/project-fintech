import {IdTokenInterface} from '../interface/id-token.interface';


export interface DecodedTokenInterface {
  claims: IdTokenInterface;
  user: any;
}
