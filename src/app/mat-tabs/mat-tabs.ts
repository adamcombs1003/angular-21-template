import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-mat-tabs',
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './mat-tabs.html',
  styleUrl: './mat-tabs.scss',
})
export class MatTabs {

}
