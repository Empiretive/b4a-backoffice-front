import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from 'src/app/shared/services/firebase-storage.service';

@Component({
  selector: 'b4a-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private storage: FirebaseStorageService) {}

  ngOnInit(): void {}
  uploadFile(e: any) {
    console.log(e);
    const file = e.target.files[0];
    const ref = this.storage.refToFile('uploads/settings/logo.png');
    const fileUpload = ref.put(file);

    // fileUpload.percentageChanges().subscribe((res) => {
    //   console.log(res);
    // });
    ref.getDownloadURL().subscribe((res) => {
      console.log(res);
    });
  }
}
