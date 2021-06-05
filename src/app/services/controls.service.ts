import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlsService {
  private userControl$ = new Subject<boolean>();
  userControlDefault = true;
  constructor() {}

  getUserControl(): Observable<boolean> {
    return this.userControl$;
  }
  changeUserToggle(toggle: boolean): void {
    this.userControlDefault = toggle;
    this.userControl$.next(this.userControlDefault);
  }
  toggleUSerControl(): void {
    this.changeUserToggle(!this.userControlDefault);
  }
}
