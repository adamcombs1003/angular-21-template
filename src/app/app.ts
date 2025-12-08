import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {SideMenu} from './side-menu/side-menu';
import {ToolBar} from './tool-bar/tool-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SideMenu, ToolBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
