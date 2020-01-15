import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromRoot from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(fromRoot.isLogedIn).pipe(tap(logedIn => {
        if(logedIn) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }));
  }
  
}
