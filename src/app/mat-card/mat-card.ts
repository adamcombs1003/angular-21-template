import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mat-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './mat-card.html',
  styleUrl: './mat-card.scss',
})
export class MatCard {

}
