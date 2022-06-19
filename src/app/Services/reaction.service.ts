import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactionRequest, ReactionResponse } from '../Model/reaction';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  private headers = new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin',"http://localhost:4200");

  constructor(private http: HttpClient, private config: ConfigService) {
  
  }

  getMyReactionToPost(id:number):Observable<ReactionResponse> {
    return this.http.get<ReactionResponse>(this.config.getMyReactionToPost(id));
  }

  getMyReactionToComment(id:number):Observable<ReactionResponse> {
    return this.http.get<ReactionResponse>(this.config.getMyReactionToComment(id));
  }

  saveReaction(dto : ReactionRequest) : Observable<ReactionResponse> {
    return this.http.post<ReactionResponse>(this.config.reactions_url, JSON.stringify(dto), {headers: this.headers, responseType: 'json'});
  }
}
