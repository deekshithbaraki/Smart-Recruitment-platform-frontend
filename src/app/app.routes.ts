import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';


import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"home",component:HomeComponentComponent},
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"register",component:RegisterFormComponent}
];
