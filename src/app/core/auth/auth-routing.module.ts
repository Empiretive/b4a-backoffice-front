import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtGuard } from 'src/app/shared/guards/jwt.guard';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    // canActivateChild: [JwtGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full',
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
