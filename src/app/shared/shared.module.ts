import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { RoleDirective } from './directives/role.directive';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    RoleDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TopNavComponent, SideNavComponent, RoleDirective],
})
export class SharedModule {}
