import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { ContainerComponent } from './container/wod/container.component';
import { StoreModule } from '@ngrx/store';
import * as fromWorkout from 'src/app/store/reducers/workout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WorkoutEffects } from 'src/app/store/effects/workout.effect';
import { WodComponent } from './components/wod/wod.component';
import { WorkoutService } from 'src/app/services/workout/workout.service';


@NgModule({
  declarations: [ContainerComponent, WodComponent],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    EffectsModule.forFeature([WorkoutEffects]),
  ],
  providers: [WorkoutService]
})
export class WorkoutModule { }
