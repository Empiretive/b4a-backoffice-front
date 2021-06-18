import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  // HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const logged = this.authService.isLoggedIn();
    let authReq = request;
    if (logged) {
      const token = localStorage.getItem('token');
      if (token !== null || token !== undefined) {
        authReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        });
      }
    }
    return next.handle(authReq).pipe(
      // finalize(() => {
      //   console.log('Finalizo la peticion');
      // }),
      tap((httpEvent: any) => {
        // Skip request
        if (httpEvent.type === 0) {
          return;
        }
        if (httpEvent.body) {
          if (!httpEvent.body.success) {
            const errors: string[] = httpEvent.body.message.split('.');
            if (errors.includes('AUTH') && errors.includes('ERROR')) {
              this.authService.Logout();
            }
          }
        }
      })
    );
  }
}
