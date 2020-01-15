import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollatorRoutingModule } from './collator-routing.module';
import { ContainerComponent } from './container/container.component';
import { WorkoutModule } from '../workout/workout.module';
import {  
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule } from '@angular/material';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    CollatorRoutingModule,
    WorkoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class CollatorModule { }
