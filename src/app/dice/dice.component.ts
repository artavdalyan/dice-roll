import { Component, Input } from '@angular/core';

import { ISide } from '../interfaces/side';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Input() side: ISide = {
    x: -45,
    y: 45,
  };
}
