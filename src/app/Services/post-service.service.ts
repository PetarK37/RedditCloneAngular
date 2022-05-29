import { Injectable } from '@angular/core';
import { PostResponse } from '../Model/post';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

  getAll():Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url); 
  }
  getOne(id : number):Observable<PostResponse> {
    return this.http.get<PostResponse>(this.config.post_url + '/' + id);
  }

  getAllRandom():Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_random); 
  }

  getAllNew():Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_new); 
  }
  getAllTop():Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_top); 
  }
  getAllHot():Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_hot); 
  }

  getAllByCommunity(id:number):Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_community+id); 
  }

  getAllRandomByCommunity(id:number):Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_community_random(id)); 
  }

  getAllHotByCommunity(id:number):Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_community_hot(id)); 
  }

  getAllNewByCommunity(id:number):Observable<PostResponse[]> {
    return  this.http.get<PostResponse[]>(this.config.post_url_community_new(id));
  }

  getAllTopByCommunity(id:number):Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.config.post_url_community_top(id));
  }

}
