import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b4a-go2back',
  templateUrl: './go2back.component.html',
  styleUrls: ['./go2back.component.css'],
})
export class Go2backComponent implements OnInit {
  @Input('path') path: any;
  constructor() {}

  ngOnInit(): void {}
}
