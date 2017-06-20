import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { MasterListPage } from '../master-list/master-list';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private nav: Nav) { }

  clickLogin() {
    this.nav.setRoot(MasterListPage);
  }
}
