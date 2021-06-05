import { Component, OnInit } from '@angular/core';
import { ToggleContentService } from 'src/app/services/toggle-content.service';
import { Routes } from './routes';
@Component({
  selector: 'b4a-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  navRoutes = Routes;

  sideMenu = true;

  constructor(private toggleContentService: ToggleContentService) {}

  ngOnInit(): void {
    this.toggleContentService.getToggle().subscribe((res) => {
      this.sideMenu = res;
    });
  }

  toggleMenu() {
    this.toggleContentService.changeToggle();
  }
}
