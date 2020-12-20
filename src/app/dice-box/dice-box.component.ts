import { Component, OnDestroy } from '@angular/core';
import { random } from 'lodash-es';
import { asyncScheduler, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Side } from './classes/side';
import { sides } from './components/dice/dice.component';

@Component({
  selector: 'app-dice-box',
  templateUrl: './dice-box.component.html',
  styleUrls: ['./dice-box.component.scss'],
})
export class DiceBoxComponent implements OnDestroy {
  timerSubscription: Subscription | null = null;
  point1 = 0;
  point2 = 0;
  side1: Side | null = null;
  side2: Side | null = null;
  die1 = 0;
  die2 = 0;
  isRolling = false;

  rollDice(): void {
    if (this.isRolling) {
      return;
    }
    this.isRolling = true;
    const die1 = random(1, 6);
    const die2 = random(1, 6);
    this.side1 = new Side(die1 * 270, die1 * -270, 75);
    this.side2 = new Side(die2 * 270, die2 * -270, 75);
    timer(300, asyncScheduler)
      .pipe(
        tap(() => (this.isRolling = false)),
        tap(() => {
          this.side1 = sides[die1 - 1];
          this.side2 = sides[die2 - 1];
          this.die1 = die1;
          this.die2 = die2;
          this.point1 += die1 > die2 ? 1 : 0;
          this.point2 += die2 > die1 ? 1 : 0;
        }),
      )
      .subscribe();
  }
  rollEveryOneSecond(): void {
    this.unsubscribeTimer();
    this.timerSubscription = timer(1000, 1000, asyncScheduler).subscribe(() =>
      this.rollDice(),
    );
  }

  ngOnDestroy(): void {
    this.unsubscribeTimer();
  }
  unsubscribeTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
