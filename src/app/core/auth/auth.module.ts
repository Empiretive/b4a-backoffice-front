import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
