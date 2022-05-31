import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';
import { CommentResponse } from '../Model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private config: ConfigService) {
  
  }

   
  getAllByPost(id: number):  Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(this.config.post_comments_url(id)); 
  }

  getNewAllByPost(id: number):  Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(this.config.post_comments_url_new(id)); 
  }

  getAllTopByPost(id: number):  Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(this.config.post_comments_url_top(id)); 
  }

  getAllOldByPost(id: number):  Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(this.config.post_comments_url_old(id)); 
  }

  getCommentKarma(id: number):  Observable<number> {
    return this.http.get<number>(this.config.comment_karma_url(id));
  }
}
