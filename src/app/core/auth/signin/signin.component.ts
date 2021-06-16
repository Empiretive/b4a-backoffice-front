import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'b4a-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public formLogin: FormGroup = this.formBuilder.group({
    userPass: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],
    ],
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  getError(field: string) {
    const currentField = this.formLogin.get(field);
    let error;
    if (currentField?.touched || currentField?.dirty && currentField.errors !== null) { 
       
  
        if(currentField?.hasError('minLength')){
          error = `El ${field} tiene pocos caracteres`; }

         if(currentField?.hasError('required')){
          error= `El ${field} es requerido`;}

         if(currentField?.hasError('maxLength')) {
          error=`El ${field} solo debe tener 12 caracteres` }
        
        }
        return error;
   }
    




// ' '' '' '' '' ' mis pinches comillas simples
    

    
     
      //  error = `El ${field} es requerido`; 

    // AQUI PONDRE LAS PINCHES COMILLAS INVERSAS QUE NUNCA ME SALEN
    
  // ``````
    
  

  // Esta funcion lo que hace es recibir el usuario que hizo login y llenar los campos en la aplicacion
  async setLoginOnApplication() {
    const user = this.formLogin.value;
    this.authService.Login(user).subscribe((res: any) => {
      if (res.success) {
        if (res.data.user != null) {
          this.authService.setUser(res.data.user);
          localStorage.setItem('token', res.data.user.token);
          this.router.navigateByUrl('/dashboard');
        }
      } else {
        alert('No se pudo iniciar sesion');
      }
    });
  }
}
