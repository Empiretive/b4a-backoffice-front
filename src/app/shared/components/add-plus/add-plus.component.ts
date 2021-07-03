import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b4a-add-plus',
  templateUrl: './add-plus.component.html',
  styleUrls: ['./add-plus.component.css'],
})
export class AddPlusComponent implements OnInit {
  @Input('path') path: string = '';
  constructor() {}

  ngOnInit(): void {}
}
