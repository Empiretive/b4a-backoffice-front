import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AppMessagesService } from './app-messages.service';
import { OverloadComponent } from './overload/overload.component';

@NgModule({
  declarations: [AlertComponent, ConfirmComponent, OverloadComponent],
  imports: [CommonModule],
  providers: [AppMessagesService],
  exports: [AlertComponent, ConfirmComponent],
})
export class AppMessagesModule {}
