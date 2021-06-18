import { Component, OnInit } from '@angular/core';
import { AppMessagesService } from '../app-messages.service';

@Component({
  selector: 'ngx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(private appMessageService: AppMessagesService) {}
  title: any;
  body: any;
  alertAcepted: any;
  showAlert: boolean = false;
  ngOnInit(): void {
    this.show();
  }
  show() {
    this.appMessageService.setAlert().subscribe((res: any) => {
      this.title = res.title;
      this.body = res.body;
      this.alertAcepted = res.accept;
      this.showAlert = true;
    });
  }
  aceptAlert() {
    this.showAlert = false;
    this.alertAcepted && this.alertAcepted();
  }
}
