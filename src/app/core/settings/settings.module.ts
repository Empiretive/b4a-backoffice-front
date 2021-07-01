import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SettingsComponent, CompanyComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
