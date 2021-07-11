import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NewsSearch } from "../news/news-search";
import { searchTypes } from "../news/news-mock";
import { NewsServicService } from '../news-servic.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
 search: NewsSearch= {keyword :"", categories:  "", searchType:"Text"};
 categories =["Sports", "Weather", "Finance","Cinema"]
 searchType = searchTypes; 
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }

  @Output() searchClick = new EventEmitter();

  onSearch():void {
    this.searchClick.emit(this.search);
  }

  OnCategoryChanged(cat:string):void{
      this.search.searchType = cat;
      this.messageService.clear();
      this.messageService.add("Selected Search type : " + cat);
  }
}
