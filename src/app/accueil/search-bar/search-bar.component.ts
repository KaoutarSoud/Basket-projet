import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  selectedOption: string = 'joueurs';

  constructor(private router: Router) {}

  navigate() {
    if (this.selectedOption) {
      this.router.navigate([`/${this.selectedOption}`]);
    }
  }
}
