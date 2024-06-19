import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConnectionComponent } from './connection/connection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavorisComponent } from './favoris/favoris.component';

// Import Angular Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { EquipesComponent } from './equipes/equipes.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { FilterPipe } from './joueurs/filter.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthInterceptor } from './auth.interceptor';
import { BannerComponent } from './accueil/banner/banner.component';
import { AboutComponent } from './accueil/about/about.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { PlayersComponent } from './accueil/players/players.component';
import { TeamsComponent } from './accueil/teams/teams.component';
import { SearchBarComponent } from './accueil/search-bar/search-bar.component';
import { NewsComponent } from './accueil/news/news.component';



//Déclarations : Liste des composants, directives, et pipes utilisés.

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConnectionComponent,
    HeaderComponent,
    FooterComponent,
    FavorisComponent,
    EquipesComponent,
    JoueursComponent,
    FilterPipe,
    BannerComponent,
    AboutComponent,
    AccueilComponent,
    PlayersComponent,
    TeamsComponent,
    SearchBarComponent,
    NewsComponent
  ],
  //Imports : Importation des modules nécessaires
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,  
    MatIconModule, 
    MatSelectModule,        
    MatButtonModule,          
    MatCardModule,           
    MatFormFieldModule,       
    FormsModule,      
    HttpClientModule,        
    ReactiveFormsModule,      
  ],
  //Providers : Services et intercepteurs, y compris la configuration de Firebase
  providers: [
    AuthGuard,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  //Bootstrap : Démarrage de l'application avec le composant racine AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }


