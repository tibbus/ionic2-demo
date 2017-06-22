import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { PlanetsPage } from '../planets/planets';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  errorMessage: string = null;

  constructor(private nav: Nav, private loginService: LoginService) { }

  clickLogin(email: string, password: string) {
    this.errorMessage = null;

    this.loginService.getLoginStatus(email, password).subscribe(
      success => {
        this.nav.setRoot(PlanetsPage);
      },
      error => {
        this.errorMessage = error;
      });
  }
}
