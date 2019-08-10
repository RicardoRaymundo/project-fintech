import {JwtVerifyOptionsInterface} from './jwt-verify-options.interface';
import {IdTokenInterface} from '../interface/id-token.interface';
import {OauthUtils} from '../oauth-utils';

const ID_TOKEN_DECODED = [
  'iss',
  'aud',
  'exp',
  'nbf',
  'iat',
  'jti',
  'azp',
  'nonce',
  'auth_time',
  'at_hash',
  'c_hash',
  'acr',
  'amr',
  'sub_jwk',
  'cnf',
  'sip_from_tag',
  'sip_date',
  'sip_callid',
  'sip_cseq_num',
  'sip_via_branch',
  'orig',
  'dest',
  'mky',
  'events',
  'toe',
  'txn',
  'rph',
  'sid',
  'vot',
  'vtm'
];


export class Jwt {

  constructor() {
    console.log('JWT');
  }

  public static decode(token: string): any {
    const [header, payload, signature] = token.split('.');
    const payloadJSON = JSON.parse(OauthUtils.urlDecodeB64(payload));
    const claims: IdTokenInterface = {};
    const user = {};
    Object.keys(payloadJSON).forEach(k => {
      claims[k] = payloadJSON[k];
      if (!ID_TOKEN_DECODED.includes(k)) {
        user[k] = payloadJSON[k];
      }
    });
    return {
      encoded: {header, payload, signature},
      header: JSON.parse(OauthUtils.urlDecodeB64(header)),
      claims,
      user
    };
  };

  public static verify(options: JwtVerifyOptionsInterface): any {
    const decoded = Jwt.decode(options.id_token);

    if (decoded.claims.iss !== options.iss) {
      throw new Error('Invalid issuer');
    }
    if (decoded.claims.aud !== options.aud) {
      throw new Error('Invalid audience');
    }
    if (decoded.header.alg !== 'RS256') {
      throw new Error('Invalid algorithm');
    }
    if (decoded.claims.nonce !== options.nonce) {
      throw new Error('Invalid nonce');
    }

    const now = new Date();
    const expDate = new Date(0);
    const iatDate = new Date(0);
    const nbfDate = new Date(0);
    const leeway = options.leeway || 60;
    expDate.setUTCSeconds(decoded.claims.exp + leeway);
    iatDate.setUTCSeconds(decoded.claims.iat - leeway);
    nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
    if (now > expDate) {
      throw new Error('id_token expired');
    }
    if (now < iatDate) {
      throw new Error('id_token was issued in the future (invalid iat)');
    }
    if (typeof decoded.claims.nbf !== 'undefined' && now < nbfDate) {
      throw new Error('token is not yet valid (invalid notBefore)');
    }
    return decoded;
  };

}
