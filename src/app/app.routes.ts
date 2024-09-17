import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { TelaPrincipalComponent } from './componentes/tela-principal/tela-principal.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
  { path: '', component: TelaPrincipalComponent },
  { path: 'monan', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
