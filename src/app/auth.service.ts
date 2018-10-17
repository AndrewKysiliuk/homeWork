import { Injectable } from '@angular/core';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(status: boolean) {
    localStorage.setItem('userIn', JSON.stringify({value: status}));
  }

  getStatus(): any {
    const ls = localStorage.getItem('userIn');
    let status = false;
    if (ls) {
      if (JSON.parse(ls).value) {
        status = true;
      } else {
        status = false;
      }
    } else {
      localStorage.setItem('userIn', JSON.stringify({value: status}));
    }

    return of(status);
  }
}
