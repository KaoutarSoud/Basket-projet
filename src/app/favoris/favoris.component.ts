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
    this.players.forEach(player => {
      if (!player.photoUrl) {
        player.photoUrl = this.getPhotoUrl(player);
      }
    });
  }

  saveFavorites(): void {
    localStorage.setItem('favoritePlayers', JSON.stringify(this.players));
  }

  getPhotoUrl(player: PlayerStats): string {
    const fullName = `${player.prenom} ${player.nom}`;
    const photoUrl = `assets/players/${fullName}.png`;
    console.log(`Generated photo URL for ${fullName}: ${photoUrl}`); // Debug log
    return photoUrl;
  }

  getPhotoPath(player: PlayerStats): string {
    const photoPath = player.photoUrl ; // Default image if none provided
    console.log(`Photo path for ${player.prenom} ${player.nom}: ${photoPath}`); // Debug log
    return photoPath;
  }

  logImageError(player: PlayerStats): void {
    console.error(`Failed to load image for ${player.prenom} ${player.nom}`);
  }
}
