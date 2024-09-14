import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { TelaPrincipalComponent } from './componentes/tela-principal/tela-principal.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loguei', component: TelaPrincipalComponent}
];
