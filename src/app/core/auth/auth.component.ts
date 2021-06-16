import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'b4a-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.JWTUserCouldLogin();
    this.router.navigateByUrl('/auth/signin');
  }
}
