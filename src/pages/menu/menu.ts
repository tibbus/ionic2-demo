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
  pages: Array<Page>;
  loginPage: Page = { title: 'Login', component: LoginPage, icon: 'ios-power' };

  constructor(private menu: MenuController) {
    // set our app's pages + Login page
    this.pages = [
      { title: 'DashBoard', icon: 'ios-albums' },
      { title: 'Photos', icon: 'ios-images' },
      { title: 'Avaiable Missions', icon: 'ios-build' },
      { title: 'Planets', component: PlanetsPage, icon: 'ios-planet' },
      { title: 'Chat', icon: 'ios-chatbubbles' }
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

interface Page {
  title: string,
  component?: any,
  icon: string
}
