import { Component, OnInit } from '@angular/core';
import { NewsResult } from './news-result';
import { NewsSearch } from './news-search';
import { SearchResults } from './news-mock';
import { NewsServicService } from '../news-servic.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  results = SearchResults;
  filteredResults: NewsResult[] = [];
  news_live = 'test';
  news: NewsResult = {
    title: 'flash news',
    description: 'Latest news',
    publishedAt: Date.now().toLocaleString(),
    url: 'https://www.google.com/',
  };


  onSearch(search: NewsSearch): void {
    this.newsService.getNews(search).subscribe(v=>this.filteredResults =v.articles);    
  }

  constructor(private newsService:NewsServicService) {

  }

  ngOnInit(): void {}
}
