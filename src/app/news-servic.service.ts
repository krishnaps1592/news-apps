import { Injectable } from '@angular/core';
import { NewsResult } from './news/news-result';
import { SearchResults } from './news/news-mock';
import { NewsSearch } from './news/news-search';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResult } from './news/news-result';

@Injectable({
  providedIn: 'root',
})
export class NewsServicService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getNews(newsSearch: NewsSearch): Observable<ApiResult> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    };
    let results: NewsResult[] = [];
    const key = '&apiKey=7f93da8dfb4042a190dfca9b6e51ec4c';
    let newsUrl = 'https://newsapi.org/v2/everything?';

    if (newsSearch.searchType == 'Text') {
      newsUrl = newsUrl + `q=${newsSearch.keyword}` + key;
    }
    if (newsSearch.searchType == 'Category') {
      newsUrl =
        newsUrl + `q=${newsSearch.categories}&q=${newsSearch.categories}` + key;
    }
    return this.http.get<ApiResult>(newsUrl);

    
  }
}
