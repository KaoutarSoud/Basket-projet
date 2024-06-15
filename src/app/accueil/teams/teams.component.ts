import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = [
    {
      name: 'Boston Celtics',
      description: 'Les Celtics ont dominé la saison régulière avec une défense solide et une attaque efficace. Ils sont considérés comme l\'un des favoris pour le titre cette année.'
    },
    {
      name: 'Denver Nuggets',
      description: 'Les Nuggets, menés par le MVP Nikola Jokić, ont continué à montrer une performance impressionnante après leur victoire au championnat la saison dernière.'
    },
    {
      name: 'Minnesota Timberwolves by Investment',
      description: 'Les Timberwolves ont surpris beaucoup de monde cette saison avec une défense rigoureuse et une croissance continue d\'Anthony Edwards.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
