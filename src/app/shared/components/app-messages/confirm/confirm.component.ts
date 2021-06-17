import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AppMessagesService } from '../app-messages.service';

@Component({
  selector: 'ngx-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  constructor(private appMessageService: AppMessagesService) {}
  showConfirm = false;
  title = '';
  body = '';
  ngOnInit(): void {
    this.appMessageService.susbcribeConfirm().subscribe((res) => {
      this.showConfirm = true;
      this.title = res.title;
      this.body = res.body;
    });
  }

  acept() {
    this.appMessageService.setConfirm(true);
    this.showConfirm = false;
  }
  reject() {
    this.appMessageService.setConfirm(false);
    this.showConfirm = false;
  }
}
