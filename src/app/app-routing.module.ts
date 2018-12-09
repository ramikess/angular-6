import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent}, //, canActivate: [AuthGuard]

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
