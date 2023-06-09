import { Injectable } from '@angular/core';
import { CommunityResponse, CommunitySearchResponse, CommuntyRequest, SusspendReason } from '../Model/community';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  private headersMultipart = new HttpHeaders({'enctype': 'multipart/form-data'});

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

   getAll(): Observable<CommunityResponse[]> {
    return this.http.get<CommunityResponse[]>(this.config.communities_url); 
   }

   search(searchParams:Record<string, any> ): Observable<CommunitySearchResponse[]> {
    let queryParams = new HttpParams()
    for(const key in searchParams){
      queryParams = queryParams.append(key,searchParams[key])
    }
    return this.http.get<CommunitySearchResponse[]>(this.config.communities_url+ '/search',{params: queryParams}); 
   }

   getMy(id : number): Observable<CommunityResponse[]> {
    return this.http.get<CommunityResponse[]>(this.config.mod_communities_url(id)); 
   }

   getOne(id: number): Observable<CommunityResponse> {
     return this.http.get<CommunityResponse>(this.config.communities_url + '/' + id);}

    crateCommunity(formData: FormData): Observable<CommunityResponse> {
      return this.http.post<CommunityResponse>(this.config.communities_url, formData, {headers: this.headersMultipart});
    }

    updateCommunity(formData: FormData,id : number): Observable<CommunityResponse> {
      return this.http.put<CommunityResponse>(this.config.communities_url + '/' + id, formData, {headers: this.headersMultipart});
    }

    deleteCommunity(id: number, dto : SusspendReason): Observable<CommunityResponse> {
      return this.http.delete<CommunityResponse>(this.config.communities_url + '/' + id, {headers: this.headers,body : JSON.stringify(dto)});
    }

}
