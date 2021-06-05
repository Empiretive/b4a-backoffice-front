import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  // private user$ = new Subject<any>();
  user$ = {
    name: 'Glendy',
    role: 1,
    token: 'TokenValuajfoksdgopajfihwadnfjcsaife',
    image: './assets/user-placeholder.jpg',
  };

  // setUser(user: any) {
  //   this.user$.next(user);
  // }

  getUser(): any {
    return this.user$;
  }
}
