import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent}, //, canActivate: [AuthGuard]
    { path: '', component: AcceuilComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
