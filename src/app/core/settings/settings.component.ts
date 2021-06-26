import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b4a-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  routes = [
    {
      path: 'company',
      name: 'Compañia',
      role: 1,
    },
    {
      path: 'roles',
      name: 'Roles',
      role: 1,
    },
    {
      path: 'interface',
      name: 'Interfaz',
      role: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
