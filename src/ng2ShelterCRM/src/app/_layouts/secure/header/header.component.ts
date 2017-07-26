import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../_services/auth.service';
import {User} from './../../../_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  public isCollapsed;
  private _user: User;

  constructor(private _auth: AuthService) {   }

  ngOnInit() {
    this._auth.user
      .subscribe(data => this._user = data);
  }

  logOut() {
    this._auth.logOut();
  }

}
