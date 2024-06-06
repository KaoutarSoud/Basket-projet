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
    FilterPipe
  ],
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
  providers: [
    AuthGuard,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"basketballstats-8a5d8","appId":"1:347762277353:web:b47d0f879fddb0481fa978","storageBucket":"basketballstats-8a5d8.appspot.com","apiKey":"AIzaSyDxcN7cQtErlbuDdtBoO4mWq47G8o9Y1cU","authDomain":"basketballstats-8a5d8.firebaseapp.com","messagingSenderId":"347762277353"}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


