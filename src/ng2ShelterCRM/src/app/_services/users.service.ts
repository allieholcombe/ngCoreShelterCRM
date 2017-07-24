import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'Rxjs/Rx';
import * as firebase from 'firebase/app';

@Injectable()

export class UserService {
  
  private result;

  private authState;
  user: Observable<firebase.User>;

  constructor(
    private _auth: AngularFireAuth
  ) {
    this.user = _auth.authState;
  }

  registerUser(email: string, password: string) {
    debugger;
    return this._auth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
  }

  logIn(email: string, password: string) {
    debugger;
    this.result = this._auth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
      return this.result;
  }
}