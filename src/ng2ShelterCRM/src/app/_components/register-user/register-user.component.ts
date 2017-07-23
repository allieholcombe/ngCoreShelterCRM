import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {UserService} from './../../_services/users.service';

@Component({
  selector: 'auth-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  providers: [
    UserService,
    AngularFireAuth
  ]
})
export class RegisterUserComponent implements OnInit {

  constructor(private _auth: AngularFireAuth,
              private _users: UserService ) { }

  ngOnInit() {
  }

  

}
