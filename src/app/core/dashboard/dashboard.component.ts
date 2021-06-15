import { Component, OnInit } from '@angular/core';
import { mainAnimation } from 'src/app/animations/main-route.animation';
import { ControlsService } from 'src/app/shared/services/controls.service';
import { ToggleContentService } from 'src/app/shared/services/toggle-content.service';

@Component({
  selector: 'b4a-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [mainAnimation],
})
export class DashboardComponent implements OnInit {
  mainToggle = true;
  constructor(
    private controlsService: ControlsService,
    private toggleContentService: ToggleContentService
  ) {}
  ngOnInit() {
    this.toggleContentService.getToggle().subscribe((res) => {
      this.mainToggle = res;
    });
  }
  hideControls() {
    this.controlsService.changeUserToggle(false);
  }
}
