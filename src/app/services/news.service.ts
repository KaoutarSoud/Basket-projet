import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../app/accueil/news/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://newsapi.org/v2/everything?q=basketball&apiKey=e769e3e426c7429f836aab18b23e977d';

  constructor(private http: HttpClient) { }

  getNews(): Observable<{ articles: Article[] }> {
    return this.http.get<{ articles: Article[] }>(this.apiUrl);
  }
}
