import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { RoleDirective } from './directives/role.directive';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    RoleDirective,
    SubNavComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TopNavComponent, SideNavComponent, RoleDirective, SubNavComponent],
})
export class SharedModule {}
