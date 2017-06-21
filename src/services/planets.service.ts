import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Planet } from './planet.model';

@Injectable()
export class PlanetsService {
  constructor(private http: Http) { }

  public getPlanets() {
    return this.http.get('http://swapi.co/api/planets/').map(data => {
      const planetsList: Planet[] = data.json().results;

      // Add a random color to each planet
      return planetsList.map((planet: Planet) => {
        planet.color = this.getRandomColor();

        return planet;
      });
    });
  }

  private getRandomColor() {
    const rgb1 = Math.floor(Math.random() * 255) + 1;
    const rgb2 = Math.floor(Math.random() * 255) + 1;
    const rgb3 = Math.floor(Math.random() * 255) + 1;

    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  }
}
