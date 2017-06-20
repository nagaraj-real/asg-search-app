import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams,Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/rx';
import { Queries } from "./models";

@Injectable()
export class StackoverflowsearchService {

  constructor(private http: Http) { }

  fetchQuestions = (searchTerm: string): Observable<any> => {
    let params: URLSearchParams = new URLSearchParams();
    params.set('order', 'desc');
    params.set('sort', 'activity');
    params.set('q', searchTerm);
    params.set('pagesize','40');
    params.set('site', 'stackoverflow');
    params.set('accepted', 'true');
    let rs = new RequestOptions();
    rs.search = params;
    return this.http.get(environment.questionapi, rs);
  }

  fetchAnswerForId = (id: number): Observable<any> => {
    return this.http.get(environment.answerapi(id.toString()))
  }

  postRecentSearches=(queries:Queries):Observable<any>=>{
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    let requestoptions = new RequestOptions();
    requestoptions.headers=headers;

    return this.http.post(environment.savesearchapi,queries,RequestOptions);
  }

   fetchRecentSearches=():Observable<any>=>{
    return this.http.get(environment.savesearchapi);
  }

}
