import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, UserResponse } from '../Model/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient,private config: ConfigService) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  changedEvent = new EventEmitter<boolean>();
  currentUser!: UserResponse ;

  logIn(dto : LoginRequest) : Observable<any>{
    return this.http.post(this.config.login_url, JSON.stringify(dto), {headers: this.headers, responseType: 'json'});
  }

  isLoggedIn(): boolean {
		if (!localStorage.getItem('JWT')) {
				return false;
		}
		return true;
	}

  changeEvent() {
    this.changedEvent.emit(true);
  }

  setCurrentUser() {
    this.getCurrentUser().subscribe(
      res => { this.currentUser = res});
    };
    
    getCurrentUser() : Observable<UserResponse> {
      return this.http.get<UserResponse>(this.config.whoami_url)
    }

  logOut() {
    localStorage.removeItem('JWT');
  }

}
