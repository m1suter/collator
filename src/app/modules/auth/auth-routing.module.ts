import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './container/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'collator', loadChildren: () => import('../collator/collator.module').then(m => m.CollatorModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
