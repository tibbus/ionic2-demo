import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanetsService {
  constructor(private http: Http) {}

  public getPlanets() {
    return this.http.get('http://swapi.co/api/planets/').map(data => data.json().results);
  }
}