import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this._router.navigate(['login']);
  }

  goToRegister() {
    this._router.navigate(['register']);
  }

}
