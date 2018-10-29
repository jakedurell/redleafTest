import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'userLogin', pathMatch: 'full' },
  {
    path: 'userLogin',
    loadChildren: './layouts/user-login/user-login.module#UserLoginModule'
  },
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
