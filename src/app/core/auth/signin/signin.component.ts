import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'b4a-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
 public formLogin:FormGroup= this.formBuilder.group({
  userPass:["", Validators.required ],
   password:["", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
 })
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

    getError(field: string){
     const currentField = this.formLogin.get(field);
     let error;
     if(currentField?.touched && currentField.errors !== null){
        error = JSON.stringify(currentField.errors);
     }
     return error;
    }

  // Esta funcion lo que hace es recibir el usuario que hizo login y llenar los campos en la aplicacion
  async setLoginOnApplication() {
    const user = this.formLogin.value;
    this.authService.Login(user);
  }
}
