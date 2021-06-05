import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [TopNavComponent, SideNavComponent, AlertsComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopNavComponent, SideNavComponent, AlertsComponent],
})
export class SharedModule {}
