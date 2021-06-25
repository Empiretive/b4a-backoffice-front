import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'b4a-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    admin:['', Validators.required],
    manager:['', Validators.required],
    employee:['', Validators.required],
    client:['', Validators.required],
     });
  

  constructor(private formBuilder:FormBuilder){ };
  
  ngOnInit(): void{};

  SaveRoles(){
    console.log(this.form.value)
  }

}
