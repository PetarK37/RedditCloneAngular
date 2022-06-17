import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRequest, UserResponse } from '../Model/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private config: ConfigService) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  register(dto : UserRequest) : Observable<UserResponse>{
    return this.http.post<UserResponse>(this.config.users_url, JSON.stringify(dto), {headers: this.headers, responseType: 'json'});
  }

  update(dto : UserRequest, id : number) : Observable<UserResponse>{
    return this.http.put<UserResponse>(this.config.edit_user_url(id), JSON.stringify(dto), {headers: this.headers, responseType: 'json'});
  }



}
