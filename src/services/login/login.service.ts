import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginService {
  constructor() { }

  public getLoginStatus(email, password) {
    // Fail
    if (!email) {
      return Observable.throw('Please fill the email field');
    } else if (!password) {
      return Observable.throw('Please fill the password field');
    } else if (password !== 'secret') {
      return Observable.throw('Wrong email/password');
    }

    // Success
    return Observable.of('success');
  }
}
