import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DiceComponent } from './components/dice/dice.component';
import { ScaleComponent } from './components/scale/scale.component';
import { DiceBoxComponent } from './dice-box.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DiceBoxComponent,
      },
    ]),
  ],
  exports: [DiceBoxComponent],
  declarations: [DiceBoxComponent, ScaleComponent, DiceComponent],
  providers: [],
})
export class DiceBoxModuleModule {}
