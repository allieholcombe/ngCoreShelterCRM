import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  public isCollapsed;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this._auth.logOut();
  }

}
