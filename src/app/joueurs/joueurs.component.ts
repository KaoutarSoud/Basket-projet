import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PlayerStats } from '../joueurs/player-stats';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  searchTerm: string = '';
  joueurs: PlayerStats[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPlayerStats(2023).subscribe((data: PlayerStats[]) => {
      this.joueurs = data;
      this.loadFavorites();// Chargement des favoris au démarrage
    });
  }

  toggleFavorite(player: PlayerStats): void {
    player.favoris = !player.favoris;
    if (player.favoris) {
      player.photoUrl = this.getPhotoUrl(player);
    }
    this.saveFavorites();
  }

  saveFavorites(): void {
    const favoritePlayers = this.joueurs.filter(player => player.favoris);
    console.log('Saving favorites:', favoritePlayers); // Debug log
    localStorage.setItem('favoritePlayers', JSON.stringify(favoritePlayers));
  }

  loadFavorites(): void {
    // Chargement des favoris du localStorage
    const favoritePlayers = JSON.parse(localStorage.getItem('favoritePlayers') || '[]');
    console.log('Loaded favorites:', favoritePlayers); // Debug log
    this.joueurs.forEach(player => {
      const fav = favoritePlayers.find((fav: PlayerStats) => fav.id === player.id);
      if (fav) {
        player.favoris = true;
        player.photoUrl = fav.photoUrl || this.getPhotoUrl(player);
      }
    });
  }

  getPhotoUrl(player: PlayerStats): string {
    const fullName = `${player.prenom} ${player.nom}`;
    const photoUrl = `assets/players/${fullName}.png`;
    console.log(`Generated photo URL for ${fullName}: ${photoUrl}`); // Debug log
    return photoUrl;
  }
  
}
