import { Component, OnInit } from '@angular/core';
import { PlayerStats } from '../joueurs/player-stats';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  players: PlayerStats[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.players = JSON.parse(localStorage.getItem('favoritePlayers') || '[]');
    console.log('Loaded favorites in FavorisComponent:', this.players); // Debug log
  }

  saveFavorites(): void {
    localStorage.setItem('favoritePlayers', JSON.stringify(this.players));
  }
}
