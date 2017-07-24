import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

  constructor(
    protected router: Router,
    // protected auth: Auth
  ) { }

  canActivate() {
    if (localStorage.getItem('access_token')) {
    // if (localStorage.getItem('access_token')) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/splash']);
    return false;
  }
}