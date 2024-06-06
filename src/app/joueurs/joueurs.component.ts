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
      this.loadFavorites();
    });
  }

  toggleFavorite(player: PlayerStats): void {
    player.favoris = !player.favoris;
    this.saveFavorites();
  }

  saveFavorites(): void {
    const favoritePlayers = this.joueurs.filter(player => player.favoris);
    console.log('Saving favorites:', favoritePlayers); // Debug log
    localStorage.setItem('favoritePlayers', JSON.stringify(favoritePlayers));
  }

  loadFavorites(): void {
    const favoritePlayers = JSON.parse(localStorage.getItem('favoritePlayers') || '[]');
    console.log('Loaded favorites:', favoritePlayers); // Debug log
    this.joueurs.forEach(player => {
      if (favoritePlayers.find((fav: PlayerStats) => fav.id === player.id)) {
        player.favoris = true;
      }
    });
  }
}
