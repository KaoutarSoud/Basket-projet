import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from './article.model'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Article[] = [];
  visibleNews: Article[] = [];
  showAll: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data.articles.filter(article => article.title.toLowerCase().includes('basketball'));
      this.updateVisibleNews();
    });
  }

  toggleNews(): void {
    this.showAll = !this.showAll;
    this.updateVisibleNews();
  }

  updateVisibleNews(): void {
    this.visibleNews = this.showAll ? this.news : this.news.slice(0, 6);
  }
}
