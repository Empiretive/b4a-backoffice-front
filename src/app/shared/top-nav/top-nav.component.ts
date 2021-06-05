import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/app/services/controls.service';
import { ToggleContentService } from 'src/app/services/toggle-content.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'b4a-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  user: any = {};
  userControl = false;
  constructor(
    private userService: UserService,
    private toggleContentService: ToggleContentService,
    private controlsService: ControlsService
  ) {}
  navToggle = true;
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.toggleContentService.getToggle().subscribe((res) => {
      this.navToggle = res;
      console.log(this.navToggle);
    });
    this.controlsService.getUserControl().subscribe((res) => {
      this.userControl = res;
    });
  }

  toggleUserControl() {
    this.userControl = !this.userControl;
  }
}
