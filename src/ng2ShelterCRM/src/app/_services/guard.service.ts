import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Guard implements CanActivate {

  constructor(
    private _router: Router,
    private _auth: AngularFireAuth
  ) { }

  // canActivate() {
  //   if (localStorage.getItem('access_token')) {
  //   // if (localStorage.getItem('access_token')) {
  //     // logged in so return true
  //     return true;
  //   }
  //   // not logged in so redirect to login page
  //   this.router.navigate(['/splash']);
  //   return false;
  // }

  canActivate(): Observable<boolean> {
    return this._auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this._router.navigate(['/splash']);
        }
      });
  }
}