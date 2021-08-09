import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppMessagesService } from 'src/app/shared/components/app-messages/app-messages.service';
import { RolesService } from 'src/app/shared/services/resources/roles.service';
import { StatesService } from 'src/app/shared/services/resources/states.service';
import { UserService } from 'src/app/shared/services/resources/user.service';
import { Image2base64Service } from 'src/app/shared/utils/image2base64.service';
import { User } from '../user.interface';

@Component({
  selector: 'b4a-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id: string = '';
  user: User = {
    name: '',
    lastName: '',
    dni: '',
    photo: '',
    phone: '',
    email: '',
    role: '',
    status: '',
  };
  states: any;
  roles: any;

  updateUserform = this.formBuilder.group({
    dni: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^\+\d{2,3}\s\d{9,11}$/)],
    role: ['3', Validators.required],
    status: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private msgService: AppMessagesService,
    private rolesService: RolesService,
    private statesService: StatesService,
    private formBuilder: FormBuilder,
    private base64: Image2base64Service
  ) {}

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe((res: any) => {
      this.roles = res.data;
    });
    this.statesService.getUserStates().subscribe((res: any) => {
      this.states = res.data;
    });
    this.id = this.route.snapshot.params.id;
    this.userService.getOneUser(this.id).subscribe(
      (res: any) => {
        if (res.success) {
          this.user = res.data;
          this.updateUserform.patchValue({
            dni: this.user.dni,
            name: this.user.name,
            lastName: this.user.lastName,
            email: this.user.email,
            phone: this.user.phone,
            role: this.user.role.level,
            status: this.user.status.value,
          });
        } else {
          this.msgService.alertShow(
            'Usuario no encontrado',
            'Tuvimos un problema al localizar el usuario, por favor confirme que este exista',
            () => {
              this.router.navigateByUrl('dashboard/users/list');
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  controlsNames: any = {
    dni: 'El documento',
    name: 'El nombre',
    lastName: 'El apellido',
    email: 'El correo',
    phone: 'El telefono',
    role: 'El rol',
    password: 'La contraseña',
    status: 'El estado',
  };
  // Mostrar errores de validacion
  getError(field: string) {
    const currentField = this.updateUserform.get(field);
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

  async putPhoto(event: any) {
    const img = await this.base64.putPhoto(event);
    this.user.photo = img;
  }
  updateUser() {
    const user = this.updateUserform.value;
    user.photo = this.user.photo;
    this.userService.updateUser(this.user._id, user).subscribe((res) => {
      if (res) {
        this.msgService.alertShow(
          'Usuario editado!',
          'El usuario fue editado exitosamente',
          () => {
            this.router.navigateByUrl('/dashboard/users/list');
          }
        );
      }
    });
  }
}
