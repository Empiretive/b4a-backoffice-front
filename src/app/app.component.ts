import { Component, OnInit } from '@angular/core';
import { fadeOut } from './animations/fadeOut-route.animation';

@Component({
  selector: 'b4a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOut],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
