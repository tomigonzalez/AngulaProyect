import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';

import { CreacionCocktailComponent } from './componentes/creacionCocktail/creacion-cocktail/creacion-cocktail.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'crearCocktail', component: CreacionCocktailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
