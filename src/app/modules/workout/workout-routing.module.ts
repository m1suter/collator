import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from 'src/app/guards/authorization.guard';
import { ContainerComponent } from './container/wod/container.component';


const routes: Routes = [
  {path: '', redirectTo: 'wod', pathMatch: 'full'},
  {path: 'wod', canActivate: [AuthorizationGuard], component: ContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
