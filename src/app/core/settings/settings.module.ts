import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RolesComponent } from './roles/roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [SettingsComponent, CompanyComponent, RolesComponent, InterfaceComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule, ReactiveFormsModule], 
})
export class SettingsModule {}
