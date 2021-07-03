import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  private user = '';
  private user$ = new Subject<any>();

  // Establecer al usuario logueado
  setUser(user: any) {
    this.user = user;
  }
  setUserObserver(user: any) {
    this.user$.next(user);
  }
  // Obtener al usuario logueado
  getUserObserver(): Observable<any> {
    return this.user$;
  }
  getUser() {
    return this.user;
  }

  //hacer loguin del usuario
  Login(user: any) {
    // Logica y peticiones para hacer loguin

    return this.http.post(`${environment.baseAPIUrl}/auth/signin`, user);
  }

  // Validar si hay un usuario logueado
  isLoggedIn(): boolean {
    // Logica para validar que un usuario esta logueado;
    return localStorage.getItem('token') ? true : false;
  }

  JWTUserCouldLogin() {
    const token = localStorage.getItem('token');

    // Logica para conseguir el usuario logueado si el token aun es valido
    const userFound = this.http
      .post(`${environment.baseAPIUrl}/auth/user/token`, { token: token })
      .subscribe(
        (res: any) => {
          if (res.success) {
            this.setUser(res.data);
            this.setUserObserver(res.data);
            this.router.navigateByUrl('/dashboard');
            return true;
          }
          localStorage.removeItem('token');
          this.router.navigateByUrl('/auth/signin');
          return false;
        },
        (err) => {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/auth/signin');
        }
      );
    this.router.navigateByUrl('/auth/signin');
    return userFound;
  }

  // Cerrar sesion
  Logout(): void {
    // Logica y peticiones para hacer logout
    localStorage.clear();
    this.setUser('');
    this.router.navigateByUrl('/auth');
  }
}
