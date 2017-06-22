import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { PlanetsService } from '../../services/planets/planets.service';
import { Planet } from '../../services/planets/planet.model';
import { LikesService } from '../../services/likes/likes.service';


@Component({
  selector: 'planets',
  templateUrl: 'planets.html',
  providers: [PlanetsService]
})
export class PlanetsPage implements OnInit {
  planets: Planet[] = [];
  likes;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private planetsService: PlanetsService,
    private likesService: LikesService
  ) { }

  // Request planets data and likes
  ngOnInit() {
    this.planetsService.getPlanets().subscribe((planets: Planet[]) => {
      this.planets = planets;
    });
    this.likesService.getLikes().subscribe(likes => {
      this.likes = likes
    });
  }

  clickPlanet(event, item) {
    this.navCtrl.push(DetailPage, {
      item
    });
  }

  clickLike(planetId: number) {
    this.likesService.changeLike(planetId);
  }
}
