import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'b4a-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: any = {
    name: 'Glendy',
    role: {
      level: 1,
    },
    token: 'TokenValuajfoksdgopajfihwadnfjcsaife',
    image: './assets/user-placeholder.jpg',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  // *************** Eliminar estas funciones cuando se haga el login real **************

  setAdminRole() {
    this.user.role = {
      level: 1,
      name: 'Admin',
    };
    this.fakeLogin();
  }
  setManagerRole() {
    this.user.role = {
      level: 2,
      name: 'Manager',
    };
    this.fakeLogin();
  }
  setEmployeeRole() {
    this.user.role = {
      level: 3,
      name: 'Empleado',
    };
    this.fakeLogin();
  }
  // Esta funcion imita un login falso para poder probar el enrutamiento
  fakeLogin() {
    this.setLoginOnApplication(this.user);
  }

  // ************** Hasta aca las funciones falsas

  // Esta funcion lo que hace es recibir el usuario que hizo login y llenar los campos en la aplicacion
  setLoginOnApplication(user: any): any {
    this.authService.Login(user);
    const logged = this.authService.isLoggedIn();
    if (logged) {
      this.router.navigateByUrl('/dashboard');
    } else {
      // Logica de cuando hay problema con el login
      return 0;
    }
  }
}
