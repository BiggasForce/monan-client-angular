import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { TelaPrincipalComponent } from './componentes/tela-principal/tela-principal.component';
import { RegisterComponent } from './componentes/register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'monan', component: TelaPrincipalComponent},
  { path: 'register', component: RegisterComponent}
];
