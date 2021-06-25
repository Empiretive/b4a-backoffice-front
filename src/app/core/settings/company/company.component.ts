import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/shared/services/firebase-storage.service';
import { Image2base64Service } from 'src/app/shared/utils/image2base64.service';

@Component({
  selector: 'b4a-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  public formCompany: FormGroup = this.formBuilder.group({
  Name:['', Validators.required], 
  Description:['', Validators.required],
  Telephone:['+58 ', Validators.pattern(/^\+\d{2,3}\s\d{9,11}$/), Validators.required], 
  Email:['',[ Validators.required, Validators.email]],
  Logo:['', Validators.required],
  })



  constructor(
    private storage: FirebaseStorageService,
    private base64: Image2base64Service,
    private formBuilder:FormBuilder,
  ) {}

  ngOnInit(): void {}
  uploadFile(e: any) {
    const file = e.target.files[0];

    const image = this.base64.extraerBase64(file).then((img: any) => {
      console.log(img);
    });

    // const ref = this.storage.refToFile('uploads/settings/logo.png');
    // const fileUpload = ref.put(file);
    // fileUpload.percentageChanges().subscribe((res) => {
    //   console.log(res);
    // });
    // ref.getDownloadURL().subscribe((res) => {
    //   console.log(res);
    // });
  }
  SaveCompany(){
    console.log(this.formCompany.value)
  }
}
