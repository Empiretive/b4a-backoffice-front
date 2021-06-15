import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  alert = new Subject<any>();
  constructor() {}

  suscribeAlert(): Observable<any> {
    return this.alert;
  }

  createAlert(message: string) {
    this.alert.next({
      show: true,
      message: message,
    });
  }
}
