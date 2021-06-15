import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { RoleDirective } from './directives/role.directive';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    AlertsComponent,
    RoleDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TopNavComponent, SideNavComponent, AlertsComponent, RoleDirective],
})
export class SharedModule {}
