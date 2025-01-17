import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Team } from './team';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  searchTeam: string = '';
  teams: Team[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
  }

  filteredTeams() {
    if (!this.searchTeam) {
      return this.teams;
    }

    return this.teams.filter(team =>
      team.name.toLowerCase().includes(this.searchTeam.toLowerCase())
    );
  }

  getLogoPath(team: Team): string | null {
    const baseName = team.full_name; // Garder les espaces et les majuscules
    const extensions = ['png'];
  
    for (const ext of extensions) {
      const logoPath = `assets/equipes/${baseName}.${ext}`;
      // Assuming the file exists
      return logoPath;
    }
    return null;
  }
  
}