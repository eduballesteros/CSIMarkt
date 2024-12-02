import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Página de inicio
  { path: 'login', component: LoginComponent },   // Página de login
  { path: 'register', component: RegisterComponent }, // Página de registro
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el dashboard

];
