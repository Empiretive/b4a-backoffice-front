import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    RegisterUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
