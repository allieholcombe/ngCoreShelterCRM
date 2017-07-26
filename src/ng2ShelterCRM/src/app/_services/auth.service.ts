import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'Rxjs/Rx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  private result;

  private authState;
  user: Observable<firebase.User>;

  constructor(
    private _auth: AngularFireAuth,
    private _router: Router
  ) {
    this.user = _auth.authState;
  }

  registerUser(email: string, password: string) {
    return this._auth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this._router.navigate(['/login']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
  }

  logIn(email: string, password: string) {
    return this._auth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!');
        this._router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
  }

  logOut() {
    return this._auth.auth.signOut()
      .then(value => {
        this._router.navigate(['/splash']);
      })
  }
}