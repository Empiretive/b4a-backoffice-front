import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
// {
// providedIn: 'root'
// }
export class AppMessagesService {
  constructor() {}
  private alert = new Subject<any>();
  private confirmResponse = new Subject<boolean>();
  private confirmAlert = new Subject<any>();
  // Alerta Personalizada
  setAlert(): Observable<any> {
    return this.alert;
  }
  alertShow(title: string, body: string, successFunction: () => void) {
    this.alert.next({
      title: title,
      body: body,
      accept: successFunction,
    });
  }

  // Confirm Personalizado
  susbcribeConfirm(): Observable<any> {
    return this.confirmAlert;
  }
  setConfirm(value: boolean) {
    this.confirmResponse.next(value);
  }

  showConfirm(title: string, body: string): Observable<any> {
    this.confirmAlert.next({
      title: title,
      body: body,
    });
    return this.confirmResponse;
  }
}
