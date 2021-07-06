import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppMessagesService } from '../components/app-messages/app-messages.service';

@Injectable({
  providedIn: 'root',
})
export class CancelGuard implements CanDeactivate<unknown> {
  constructor(private msgService: AppMessagesService) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const response = confirm(
      'Las acciones que esta realizando no se guardaran, ¿Seguro que desea salir?'
    );
    return response;
  }
}
