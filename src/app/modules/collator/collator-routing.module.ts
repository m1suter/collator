import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {path: 'workout', loadChildren: () => import('../workout/workout.module').then(m => m.WorkoutModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollatorRoutingModule { }
