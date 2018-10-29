import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserLoginComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './layouts/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
