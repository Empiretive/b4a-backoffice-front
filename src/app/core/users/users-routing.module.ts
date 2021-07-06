import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelGuard } from 'src/app/shared/guards/cancel.guard';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'register',
        component: RegisterUserComponent,
        data: {
          role: 1,
        },
        canDeactivate: [CancelGuard],
      },
      {
        path: 'list',
        component: ListUsersComponent,
        data: {
          role: 2,
        },
      },
      {
        path: 'detail/:id',
        component: DetailUserComponent,
        data: {
          role: 2,
        },
      },
      {
        path: 'update/:id',
        component: UpdateUserComponent,
        data: {
          role: 1,
        },
        canDeactivate: [CancelGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
