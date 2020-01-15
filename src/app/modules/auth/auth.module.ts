import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './container/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromLogin from 'src/app/store/reducers/login.reducer'
import {
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from 'src/app/store/effects/login.effect';
import { WorkoutModule } from '../workout/workout.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    WorkoutModule,
    EffectsModule.forFeature([LoginEffects]),
  ]
})
export class AuthModule { }
