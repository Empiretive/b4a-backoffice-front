import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/shared/alerts/alerts.service';

@Component({
  selector: 'b4a-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private alertService: AlertsService) {}

  ngOnInit(): void {}
  createAlert() {
    this.alertService.createAlert('Bienvenido a mi alerta personalizada');
  }
}
