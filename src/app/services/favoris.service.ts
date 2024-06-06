import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  constructor(private firestore: AngularFirestore) {}

  getFavoris(): Observable<any[]> {
    return this.firestore.collection('favoris').valueChanges();
  }
}
