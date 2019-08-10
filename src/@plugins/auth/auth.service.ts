import {Injectable} from '@angular/core';
// import createAuth0Client from '@auth0/auth0-spa-js';
// import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import * as config from '../../../auth_config.json';
import {BehaviorSubject} from 'rxjs';
import {OAuthClient} from '../../@libs/api-oauth/oauth-client';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  profile = new BehaviorSubject<any>(null);
  config = config;
  private auth0Client: OAuthClient;

  async getAuth0Client(): Promise<OAuthClient> {
    if (!this.auth0Client) {
      this.auth0Client = await OAuthClient.create({
        domain: config.domain,
        client_id: config.clientId,
        redirect_uri: `${window.location.origin}/callback`
      });

      try {
        this.isAuthenticated.next(await this.auth0Client.isAuthenticated());

        this.isAuthenticated.subscribe(async isAuthenticated => {
          if (isAuthenticated) {
            return this.profile.next(await this.auth0Client.getUser());
          }

          this.profile.next(null);
        });
      } catch {
      }

      return this.auth0Client;
    }

    return this.auth0Client;
  }
}
