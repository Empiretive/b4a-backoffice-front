import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/app/shared/services/controls.service';
import { ToggleContentService } from 'src/app/shared/services/toggle-content.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'b4a-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  user: any = {
    name: 'Usuario',
    lastName: '',
    role: 4,
  };
  userControl = false;
  constructor(
    private authService: AuthService,
    private toggleContentService: ToggleContentService,
    private controlsService: ControlsService
  ) {}
  navToggle = true;
  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.getUserObserver().subscribe((res) => {
      this.user = res;
    });
    this.toggleContentService.getToggle().subscribe((res) => {
      this.navToggle = res;
    });
    this.controlsService.getUserControl().subscribe((res) => {
      this.userControl = res;
    });
    console.log(this.user);
  }

  toggleUserControl() {
    this.userControl = !this.userControl;
  }
  logout() {
    this.authService.Logout();
  }
}
