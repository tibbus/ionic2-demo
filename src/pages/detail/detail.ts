import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Planet } from '../../services/planets/planet.model';
import { LikesService } from '../../services/likes/likes.service';


@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailPage implements OnInit {
  planet: Planet;
  like: number;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private likesService: LikesService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.planet = navParams.get('item');
  }

  // Set the current planet and request likes
  ngOnInit() {
    this.likesService.getLikes().subscribe(likes => {
      this.like = likes[this.planet.id];
    });
  }

  clickLike() {
    this.likesService.changeLike(this.planet.id);
  }
}
