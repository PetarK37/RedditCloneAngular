import { Injectable } from '@angular/core';
import { CommunitySearchResponse} from '../Model/community';
import { PostSearchResponse } from '../Model/post';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {ConfigService} from './config.service';
import { Observable,BehaviorSubject, catchError,of ,tap,map} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private headersMultipart = new HttpHeaders({'enctype': 'multipart/form-data'});
  private searchResultsSubject: BehaviorSubject<CommunitySearchResponse[]|PostSearchResponse[]> = new BehaviorSubject<CommunitySearchResponse[]|PostSearchResponse[]>([]);
  public searchResults$: Observable<CommunitySearchResponse[]|PostSearchResponse[]> = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

   search(searchParams: Record<string, any>, differentiator: string): Observable<boolean> {
    let queryParams = new HttpParams();
    for (const key in searchParams) {
      queryParams = queryParams.append(key, searchParams[key]);
    }
    if (differentiator === "community") {
      return this.http.get<CommunitySearchResponse[]>(this.config.communities_url + '/search', { params: queryParams, headers: this.headersMultipart })
      .pipe(
        tap((res: CommunitySearchResponse[]) => {
          this.searchResultsSubject.next(res);
        }),
        map((res: CommunitySearchResponse[]) => true),
        catchError((err) => {
          return of(false);
        })
      );
    } else {
      return this.http.get<PostSearchResponse[]>(this.config.post_url + '/search/'+ differentiator, { params: queryParams, headers: this.headersMultipart })
      .pipe(
        tap((res: PostSearchResponse[]) => {
          this.searchResultsSubject.next(res);
        }),
        map((res: PostSearchResponse[]) => true),
        catchError((err) => {
          return of(false);
        })
      );
    }
  }
}