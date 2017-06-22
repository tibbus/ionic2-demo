import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class LikesService {
  private likes = {};
  private likes$ = new BehaviorSubject({});

  constructor() { }

  // Subscriber will receive an initial data of `{}`
  public getLikes() {
    return this.likes$;
  }

  // Change specific like ID count and broadcast the new data
  public changeLike(id: number) {
    if (this.likes[id] && this.likes[id].count !== 0) {
      this.likes[id] = 0;
    } else {
      this.likes[id] = 1;
    }

    this.likes$.next(this.likes);
  }
}
