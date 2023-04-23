import { Injectable } from '@angular/core';
import { CommunitySearchResponse} from '../Model/community';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {ConfigService} from './config.service';
import { Observable,BehaviorSubject, catchError,of ,tap,map} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private headersMultipart = new HttpHeaders({'enctype': 'multipart/form-data'});
  private searchResultsSubject: BehaviorSubject<CommunitySearchResponse[]> = new BehaviorSubject<CommunitySearchResponse[]>([]);
  public searchResults$: Observable<CommunitySearchResponse[]> = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

   search(searchParams: Record<string, any>, type: string): Observable<boolean> {
    let queryParams = new HttpParams();
    for (const key in searchParams) {
      queryParams = queryParams.append(key, searchParams[key]);
    }
    if (type === "Community") {
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
      return this.http.get<CommunitySearchResponse[]>(this.config.post_url + '/search', { params: queryParams, headers: this.headersMultipart })
      .pipe(
        tap((res: CommunitySearchResponse[]) => {
          this.searchResultsSubject.next(res);
        }),
        map((res: CommunitySearchResponse[]) => true),
        catchError((err) => {
          return of(false);
        })
      );
    }
  }
}