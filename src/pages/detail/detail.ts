import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Planet } from '../../services/planet.model';


@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  planet: Planet;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.planet = navParams.get('item');
  }
}
