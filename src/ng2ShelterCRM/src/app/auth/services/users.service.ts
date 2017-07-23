import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'Rxjs/Rx';
import * as firebase from 'firebase/app';

@Injectable()

export class AF {

    private authState;
    user: Observable<firebase.User>;

    constructor(
        private _auth: AngularFireAuth
    ) { }

    registerUser(email: string, password: string) {
        this._auth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            })

    }
}