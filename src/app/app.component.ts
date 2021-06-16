import { Component, OnInit } from '@angular/core';
import { fadeOut } from './animations/fadeOut-route.animation';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'b4a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOut],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.JWTUserCouldLogin();
  }
}
