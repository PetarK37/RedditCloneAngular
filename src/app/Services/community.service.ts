import { Injectable } from '@angular/core';
import { CommunityResponse, CommuntyRequest } from '../Model/community';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

   getAll(): Observable<CommunityResponse[]> {
    return this.http.get<CommunityResponse[]>(this.config.communities_url); 
   }

   getMy(id : number): Observable<CommunityResponse[]> {
    return this.http.get<CommunityResponse[]>(this.config.mod_communities_url(id)); 
   }

   getOne(id: number): Observable<CommunityResponse> {
     return this.http.get<CommunityResponse>(this.config.communities_url + '/' + id);}

    crateCommunity(dto: CommuntyRequest): Observable<CommunityResponse> {
      return this.http.post<CommunityResponse>(this.config.communities_url, JSON.stringify(dto), {headers: this.headers});
    }

}
