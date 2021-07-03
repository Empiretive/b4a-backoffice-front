import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppMessagesService } from 'src/app/shared/components/app-messages/app-messages.service';
import { UserService } from 'src/app/shared/services/resources/user.service';
import { User } from '../user.interface';

@Component({
  selector: 'b4a-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  @ViewChild('userValue', { static: true }) usernameTemplate:
    | TemplateRef<any>
    | undefined;
  @ViewChild('userHeader', { static: true }) userHeaderTemplate:
    | TemplateRef<any>
    | undefined;
  @ViewChild('actionRow', { static: true }) actions:
    | TemplateRef<any>
    | undefined;
  @ViewChild('userTable', { static: true }) userTable: TemplateRef<any> | any;
  headers: any = [];

  rows: any = [];
  constructor(
    private userService: UserService,
    private msgService: AppMessagesService
  ) {}

  ngOnInit(): void {
    this.headers = [
      { prop: 'dni', name: 'Documento' },
      {
        cellTemplate: this.usernameTemplate,
        headerTemplate: this.userHeaderTemplate,
        name: 'Name',
      },
      { prop: 'email', name: 'Correo' },
      { prop: 'phone', name: 'Telefono' },
      { prop: 'role.name', name: 'Rol' },
      { prop: 'status.name', name: 'Estado' },
      {
        cellTemplate: this.actions,
        // headerTemplate: this.userHeaderTemplate,
        name: 'Controles',
      },
    ];
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.rows = [...res.data];
        this.userTable.recalculate();
        this.userTable.offset(0);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  editUser(id: any) {
    console.log('Editing: ' + id);
  }
  deleteUser(id: any) {
    this.msgService
      .showConfirm(
        '¿Desea eliminar a este usuario?',
        'Esta accion no puede deshacerse \n Le recomendamos editar el estado del usuario en lugar de eliminarlo'
      )
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.userService.deleteUser(id).subscribe((response) => {
            this.getUsers();
          });
        }
      });
  }
}
