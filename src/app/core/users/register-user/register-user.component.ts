import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppMessagesService } from 'src/app/shared/components/app-messages/app-messages.service';
import { UserService } from 'src/app/shared/services/resources/user.service';
import { Image2base64Service } from 'src/app/shared/utils/image2base64.service';

@Component({
  selector: 'b4a-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  userImg = '';
  registerUserform = this.formBuilder.group({
    dni: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['+58 ', Validators.pattern(/^\+\d{2,3}\s\d{9,11}$/)],
    role: [3, Validators.required],
    password: ['', [Validators.minLength(4), Validators.maxLength(14)]],
  });
  roles: any = [];
  constructor(
    private base64: Image2base64Service,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private msgService: AppMessagesService,
    private router: Router
  ) {}

  controlsNames: any = {
    dni: 'El documento',
    name: 'El nombre',
    lastName: 'El apellido',
    email: 'El correo',
    phone: 'El telefono',
    role: 'El rol',
    password: 'La contraseña',
  };

  ngOnInit(): void {
    this.userService.getRoles().subscribe((res: any) => {
      this.roles = res.data;
    });
  }

  // Mostrar errores de validacion
  getError(field: string) {
    const currentField = this.registerUserform.get(field);
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
        error = `${name} tiene demasiados caracteres`;
      }
      if (currentField?.hasError('email')) {
        error = `${name} no es un email valido`;
      }
      if (currentField?.hasError('pattern')) {
        error = `${name} no tiene un patron valido: Pruebe con un codigo de pais (+58) seguido del numero`;
      }
    }
    return error;
  }

  // Establecer la foto del usuario
  putPhoto(event: any) {
    const img = event.target.files[0];
    if (img.type !== 'image/jpeg' && img.type !== 'image/png') {
      this.msgService.alertShow(
        'Formato de archivo invalido',
        'El archivo debe ser una imagen JPG o PNG',
        () => {
          console.log('alerta');
        }
      );
    } else if (img.size / 1024 > 500) {
      this.msgService.alertShow(
        'El archivo es demasiado pesado',
        'El archivo debe tener un peso no mayor a 5mb'
      );
    } else {
      this.base64.extraerBase64(img).then((image: any) => {
        this.userImg = image.base;
      });
    }
  }

  // Registrar Usuario
  registerUser() {
    const newUser = this.registerUserform.value;

    newUser.photo = this.userImg;
    console.log(newUser);
    // this.registerUserform.reset();
    this.userService.registerUser(newUser).subscribe(
      (res: any) => {
        if (res.success) {
          this.msgService.alertShow(
            'Registro Exitoso',
            'El usuario fue registrado y se le envio un correo',
            () => {
              this.router.navigateByUrl('dashboard/users/list');
            }
          );
        } else {
          console.log(res);
          const error = res.message.split('.');
          if (error[error.length - 1] == 'USER_EXIST') {
            this.msgService.alertShow(
              'El usuario ya existe',
              'El usuario ya fue registrado previamente, verifique que el correo o DNI no este repetido',
              () => {
                // this.router.navigateByUrl('dashboard/users/list');
              }
            );
          } else if (error[error.length - 1] == 'BAD_REQUEST') {
            this.msgService.alertShow(
              'Error en la peticion',
              'No se pudo registrar el usuario, hubo algun error en la peticion o los datos que envió',
              () => {
                // this.router.navigateByUrl('dashboard/users/list');
              }
            );
          } else {
            this.msgService.alertShow(
              'Problema en el registro',
              'Hemos tenido problemas al tratar de registrar este usuario. Por favor intentelo de nuevo mas tarde',
              () => {
                this.router.navigateByUrl('dashboard/users/list');
              }
            );
          }
        }
      },
      (err) => {
        this.msgService.alertShow(
          'Error al registrar el usuario',
          'Puede que sea un problema de conexion, compruebelo e intente de nuevo en unos minutos',
          () => {
            this.router.navigateByUrl('dashboard/users/list');
          }
        );
      }
    );
  }
}
