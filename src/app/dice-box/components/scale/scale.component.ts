import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScaleComponent {
  Math = Math;
  @Input() die1 = 5;
  @Input() die2 = 5;
}
