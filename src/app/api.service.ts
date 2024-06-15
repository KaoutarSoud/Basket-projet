import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerStats } from './joueurs/player-stats';
import { Team } from './equipes/team';

interface ApiResponse<T> {
  data: T[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.balldontlie.io/v1';

  constructor(private http: HttpClient) { }

  getPlayerStats(season: number): Observable<PlayerStats[]> {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/stats?seasons[]=${season}`).pipe(
      map(response => response.data.map(item => this.transformPlayerStats(item)))
    );
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<ApiResponse<Team>>(`${this.baseUrl}/teams`).pipe(
      map(response => response.data.map(team => this.transformTeam(team)))
    );
  }

  private transformPlayerStats(data: any): PlayerStats {
    const photoUrl = this.getPhotoUrl(data.player.first_name, data.player.last_name);
    console.log(`Generated photo URL for ${data.player.first_name} ${data.player.last_name}: ${photoUrl}`); // Debug log
    return {
      id: data.player.id,
      prenom: data.player.first_name,
      nom: data.player.last_name,
      position: this.translatePosition(data.player.position),
      taille: data.player.height,
      poids: data.player.weight,
      numeroMaillot: +data.player.jersey_number,
      equipe: data.team.full_name,
      minutesJouees: +data.min,
      fgm: data.fgm,
      fga: data.fga,
      fgp: data.fg_pct * 100,
      tpm: data.fg3m,
      tpa: data.fg3a,
      tpp: data.fg3_pct * 100,
      ftm: data.ftm,
      fta: data.fta,
      ftp: data.ft_pct * 100,
      oreb: data.oreb,
      dreb: data.dreb,
      reb: data.reb,
      ast: data.ast,
      pf: data.pf,
      pts: data.pts,
      dateDuLannee: new Date(data.game.date).getFullYear().toString(),
      favoris: false,
      photoUrl: photoUrl // Add photoUrl
    };
  }

  private transformTeam(data: any): Team {
    return {
      id: data.id,
      conference: data.conference === 'West' ? 'Ouest' : 'Est',
      division: data.division,
      city: data.city,
      name: data.name,
      full_name: data.full_name,
      abbreviation: data.abbreviation
    };
  }

  private translatePosition(position: string): string {
    const positions: { [key: string]: string } = {
      'G': 'Arrière',
      'F': 'Ailier',
      'C': 'Pivot'
    };
    return positions[position] || position;
  }

  private getPhotoUrl(firstName: string, lastName: string): string {
    return `assets/players/${firstName} ${lastName}.png`; // Adjust based on your directory structure
  }
}
