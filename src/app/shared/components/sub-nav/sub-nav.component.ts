import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b4a-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css'],
})
export class SubNavComponent implements OnInit {
  @Input('routes') routes: any = [];

  constructor() {}

  ngOnInit(): void {}
}
