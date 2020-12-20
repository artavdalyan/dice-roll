import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Side } from '../../classe/side';

export const sides = [
  new Side(0, 0, 75),
  new Side(180, 0, 75),
  new Side(0, -90, 75),
  new Side(0, 90, 75),
  new Side(-90, 0, 75),
  new Side(90, 0, 75),
];
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
  _side: Side | null = null;
  @Input()
  set side(side: Side | null) {
    this._side = side ?? new Side(-45, 45, 75);
  }
  @Input() isRolling = false;
}
