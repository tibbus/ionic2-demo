import { Component, Input } from '@angular/core';
import { Nav, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { PlanetsPage } from '../planets/planets';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  @Input() nav: Nav;
  pages: Array<{ title: string, component?: any }>;

  constructor(private menu: MenuController) {
    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'DashBoard' },
      { title: 'Photos' },
      { title: 'Avaiable Missions' },
      { title: 'Planets', component: PlanetsPage },
      { title: 'Chat' }
    ];
  }

  openPage(page) {
    const currentPage = this.nav.getActive();
    // If there's no component DO NOTHING
    if (!page.component) {
      return;
    }

    // close the menu when clicking a link from the menu
    this.menu.close();
    // If it's the same page do NOT navigate to it again
    if (page.component === currentPage.component) {
      return;
    }
    // navigate to the new page
    this.nav.setRoot(page.component);
  }
}
