import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private isCardVisibleSubject = new BehaviorSubject<boolean>(false);
  isCardVisible$ = this.isCardVisibleSubject.asObservable();

  showCard() {
    this.isCardVisibleSubject.next(true);
  }

  hideCard() {
    this.isCardVisibleSubject.next(false);
  }
}
