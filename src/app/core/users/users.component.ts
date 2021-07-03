import { Component, OnInit } from '@angular/core';
import { fadeOut } from 'src/app/animations/fadeOut-route.animation';

@Component({
  selector: 'b4a-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [fadeOut],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
