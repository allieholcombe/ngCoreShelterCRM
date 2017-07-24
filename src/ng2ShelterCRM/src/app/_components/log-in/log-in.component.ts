import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable } from 'rxjs/Rx';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserService } from './../../_services/users.service';
import { User } from './../../_models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [
    UserService,
    AngularFireAuth
  ]
})
export class LogInComponent implements OnInit {
  // login: boolean = false;
  // register: boolean = false;
  private form: FormGroup;
  private user: User;
  private authState: Observable<firebase.User>;

  constructor(
    private _auth: AngularFireAuth,
    private _users: UserService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      "email": new FormControl(""),
      "password": new FormControl("")
    });

    this.authState = _auth.authState;
  }

  ngOnInit() {
  }

    onSubmit() {
    debugger;
    this._users.logIn(this.form.get('email').value, this.form.get('password').value);
  }

}
