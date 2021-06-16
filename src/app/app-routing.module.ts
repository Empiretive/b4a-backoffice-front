import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtGuard } from './shared/guards/jwt.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
    // canLoad: [JwtGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./core/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
