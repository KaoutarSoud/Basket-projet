import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"basketballstats-8a5d8","appId":"1:347762277353:web:b47d0f879fddb0481fa978","storageBucket":"basketballstats-8a5d8.appspot.com","apiKey":"AIzaSyDxcN7cQtErlbuDdtBoO4mWq47G8o9Y1cU","authDomain":"basketballstats-8a5d8.firebaseapp.com","messagingSenderId":"347762277353"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
