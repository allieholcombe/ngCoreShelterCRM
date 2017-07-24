import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserService } from './../../_services/users.service';

import { NewUser } from './../../_models/newuser.model';

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
  private newUser: NewUser = new NewUser;
  private form: FormGroup;

  constructor(
    private _auth: AngularFireAuth,
    private _users: UserService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      "firstName": new FormControl(""),
      "lastName": new FormControl(""),
      "email": new FormControl(""),
      "password": new FormControl("")
    });
  }

  ngOnInit() {
    // this.newUser.firstName = "butts";
  }

  onSubmit() {
    this._users.registerUser(this.form.get('email').value, this.form.get('password').value);
  }
}
