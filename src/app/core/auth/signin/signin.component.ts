import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessagesService } from 'src/app/shared/components/app-messages/app-messages.service';

@Component({
  selector: 'b4a-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public formLogin: FormGroup = this.formBuilder.group({
    userPass: ['', Validators.required],
    password: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(12)],
    ],
  });
  private controlsNames: any = {
    userPass: 'El Correo | DNI',
    password: 'La Contraseña',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessagesService: AppMessagesService
  ) {}

  ngOnInit(): void {
    this.authService.JWTUserCouldLogin();
  }

  getError(field: string) {
    const currentField = this.formLogin.get(field);
    let error;
    const name = this.controlsNames[field];
    if (
      currentField?.touched ||
      (currentField?.dirty && currentField.errors !== null)
    ) {
      if (currentField?.hasError('minlength')) {
        error = `${name} tiene pocos caracteres`;
      }

      if (currentField?.hasError('required')) {
        error = `${name} es requerido`;
      }

      if (currentField?.hasError('maxlength')) {
        error = `${name} solo debe tener 12 caracteres`;
      }
    }
    return error;
  }

  // Esta funcion lo que hace es recibir el usuario que hizo login y llenar los campos en la aplicacion
  async setLoginOnApplication() {
    const user = this.formLogin.value;
    this.authService.Login(user).subscribe(
      (res: any) => {
        if (res.success) {
          if (res.data.user != null) {
            this.authService.setUser(res.data.user);
            this.authService.setUserObserver(res.data.user);
            localStorage.setItem('token', res.data.user.token);
            this.router.navigateByUrl('/dashboard');
          }
        } else {
          this.appMessagesService.alertShow(
            'No se pudo iniciar sesion',
            'Puede que el usuario o la contraseña sean incorrectas'
          );
        }
      },
      (err) => {
        this.appMessagesService.alertShow(
          'Ocurrio un error',
          'Probablemente sea un problema de conexion con el servidor, porfavor intente de nuevo en unos minutos'
        );
      }
    );
  }
}
