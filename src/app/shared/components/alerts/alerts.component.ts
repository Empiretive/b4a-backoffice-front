import { Component, OnInit } from '@angular/core';
import { AlertsService } from './alerts.service';

@Component({
  selector: 'b4a-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  constructor(private alertServices: AlertsService) {}
  alertMessage = '';
  showAlert = false;
  ngOnInit(): void {
    this.alertServices.suscribeAlert().subscribe((res) => {
      this.showAlert = res.show;
      this.alertMessage = res.message;
    });
  }

  hideAlert() {
    this.showAlert = false;
  }
}
