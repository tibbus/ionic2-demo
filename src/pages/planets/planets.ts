import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { PlanetsService } from '../../services/planets.service';
import { Planet } from '../../services/planet.model';

@Component({
  selector: 'planets',
  templateUrl: 'planets.html',
  providers: [PlanetsService]
})
export class PlanetsPage {
  planets: Planet[] = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, private planetsService: PlanetsService) {
    this.planetsService.getPlanets().subscribe(planets => this.planets = planets);
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
