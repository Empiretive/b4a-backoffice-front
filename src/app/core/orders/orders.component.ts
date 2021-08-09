import { Component, OnInit } from '@angular/core';
import { AppMessagesService } from 'src/app/shared/components/app-messages/app-messages.service';

@Component({
  selector: 'b4a-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private msgService: AppMessagesService) {}

  ngOnInit(): void {}

  mostrarAlert() {
    this.msgService.alertShow('Alerta mostrada', 'Esta es una alerta');
  }
}
