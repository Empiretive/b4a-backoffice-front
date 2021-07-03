import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { RoleDirective } from './directives/role.directive';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { AddPlusComponent } from './components/add-plus/add-plus.component';
import { Go2backComponent } from './components/go2back/go2back.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    RoleDirective,
    SubNavComponent,
    AddPlusComponent,
    Go2backComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TopNavComponent,
    SideNavComponent,
    RoleDirective,
    SubNavComponent,
    AddPlusComponent,
    Go2backComponent,
  ],
})
export class SharedModule {}
