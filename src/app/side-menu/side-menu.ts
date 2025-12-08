import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  imports: [
    MatButton
  ]
})
export class SideMenu {
  menuItems: MenuItem[] = [
    {
      title: 'Menu Item 1',
      route: ''
    },
    {
      title: 'Menu Item 2',
      route: ''
    }
  ]
}
