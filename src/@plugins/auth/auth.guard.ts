import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private _authService: AuthService) {
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const client = await this._authService.getAuth0Client();
    const isAuthenticated = await client.isAuthenticated();

    if (isAuthenticated) {
      return true;
    }

    client.loginWithRedirect({
      redirect_uri: `${window.location.origin}/callback`,
      appState: {target: state.url}
    });

    return false;
  }
}
