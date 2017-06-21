import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { PlanetsPage } from '../planets/planets';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private nav: Nav) { }

  clickLogin() {
    this.nav.setRoot(PlanetsPage);
  }
}
