import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { Workout } from 'src/app/models/workout.model';
import { Store } from '@ngrx/store';
import * as workoutActions from 'src/app/store/actions/workout.actions';
import * as workoutSelector from 'src/app/store/reducers';
import * as fromWorkout from 'src/app/store/reducers/workout.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'wod-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit  {
  workout$: Observable<Workout>;


  constructor(
    private store: Store<fromWorkout.State>,
    private workoutService: WorkoutService
  ) { 
  }

  ngOnInit() {
    this.workout$ = this.store.select(workoutSelector.getWorkoutOfTheDay);
  }

}
