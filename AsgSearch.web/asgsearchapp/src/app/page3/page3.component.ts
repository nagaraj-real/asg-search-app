import { Component, OnInit } from '@angular/core';
import { StackoverflowsearchService } from '../stackoverflowsearch.service';
import { Queries, Question, Answer } from "../models";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  providers: [StackoverflowsearchService]
})
export class Page3Component implements OnInit {
  queries: Queries;
  error: boolean;
  constructor(private stackoverflowsearchService: StackoverflowsearchService) { }

  ngOnInit() {

  }

  onRefresh = () => {
    this.error = false;
    this.stackoverflowsearchService.fetchRecentSearches().subscribe(result => {
      if (result.status === 200 && result.json().length > 0) {
        this.queries = result.json();
      } else if(result.status === 200 && result.json().length > 0) {
        this.queries.Questions=[];
      }
    }, error => {
      this.error = true;
    })
  }

}
