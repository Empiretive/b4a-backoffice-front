import { Component, OnInit } from '@angular/core';
import { ControlsService } from './services/controls.service';
import { ToggleContentService } from './services/toggle-content.service';
import { mainAnimation } from './animations/main-route.animation';
@Component({
  selector: 'b4a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [mainAnimation],
})
export class AppComponent implements OnInit {
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
