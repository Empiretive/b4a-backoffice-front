import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { RolesComponent } from './roles/roles.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: {
      role: 1,
    },
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          role: 1,
        },
      },
      {
        path: 'roles',
        component: RolesComponent,
        data: {
          role: 1,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
