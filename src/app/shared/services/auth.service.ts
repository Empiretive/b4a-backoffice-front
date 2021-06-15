import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  private user: any = {
    image: 'assets/user-placeholder.jpg',
    name: 'Usuario',
    role: {
      level: 1,
      name: 'Administrador',
    },
  };

  // Establecer al usuario logueado
  setUser(user: any) {
    this.user = user;
  }
  // Obtener al usuario logueado
  getUser() {
    return this.user;
  }

  //hacer loguin del usuario
  Login(user: any): void {
    // Logica y peticiones para hacer loguin

    this.setUser(user);
    localStorage.setItem('token', user.token);
  }

  // Validar si hay un usuario logueado
  isLoggedIn(): boolean {
    // Logica para validar que un usuario esta logueado;
    return localStorage.getItem('token') ? true : false;
  }

  JWTUserCouldLogin() {
    const token = localStorage.getItem('token');
    if (token) {
      // Logica para conseguir el usuario logueado si el token aun es valido

      return true;
    } else {
      return false;
    }
  }

  // Cerrar sesion
  Logout(): void {
    // Logica y peticiones para hacer logout
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
