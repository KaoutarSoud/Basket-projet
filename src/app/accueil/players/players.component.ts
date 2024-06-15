import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [
    {
      name: 'Stephen Curry',
      fullName: 'Wardell Stephen Curry II',
      team: 'Golden State Warriors',
      weight: 185,
      weightKg: 84,
      image: '/assets/steph.png'
    },
    {
      name: 'LeBron James',
      fullName: 'LeBron Raymone James Sr.',
      team: 'Los Angeles Lakers',
      weight: 250,
      weightKg: 113,
      image: '/assets/james.png'
    },
    {
      name: 'Giannis Antetokounmpo',
      fullName: 'Giannis Sina Ugo Antetokounmpo',
      team: 'Milwaukee Bucks',
      weight: 242,
      weightKg: 110,
      image: '/assets/gianis.png'
    },
    {
      name: 'Kevin Durant',
      fullName: 'Kevin Wayne Durant',
      team: 'Phoenix Suns',
      weight: 240,
      weightKg: 109,
      image: '/assets/durant.png'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToPlayers(event?: MouseEvent): void {
    if (event) {
      event.preventDefault(); // Prevent default link behavior
    }
    this.router.navigate(['/joueurs']);
  }
}
