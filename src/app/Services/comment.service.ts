import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';
import { CommentResponse, CommentRquest } from '../Model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private headers = new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin',"http://localhost:4200");

  constructor(private http: HttpClient, private config: ConfigService) {
  
  }

  saveComment(dto : CommentRquest) : Observable<CommentResponse> {
    return this.http.post<CommentResponse>(this.config.comment_url, JSON.stringify(dto), {headers: this.headers});
  }

  deleteComment(id: number):  Observable<CommentResponse> {
    return this.http.delete<CommentResponse>(this.config.getOneCommentUrl(id));
  }

  updateComment(dto : CommentRquest,id : number) : Observable<CommentResponse> {
    return this.http.put<CommentResponse>(this.config.getOneCommentUrl(id), JSON.stringify(dto), {headers: this.headers});
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

  getOneComment(id: number):  Observable<CommentResponse> {
    return this.http.get<CommentResponse>(this.config.getOneCommentUrl(id));
  }


}
