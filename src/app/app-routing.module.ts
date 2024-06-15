// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConnectionComponent } from './connection/connection.component';
import { FavorisComponent } from './favoris/favoris.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { EquipesComponent } from './equipes/equipes.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'connection', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'favoris', component: FavorisComponent, canActivate: [AuthGuard.canActivate] },
  { path: 'equipes', component: EquipesComponent },
  { path: 'joueurs', component: JoueursComponent },
  { path: 'accueil', component: AccueilComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
