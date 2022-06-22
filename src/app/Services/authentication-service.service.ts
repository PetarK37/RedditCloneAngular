import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, UserResponse } from '../Model/user';
import { ConfigService } from './config.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient,private config: ConfigService) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  changedEvent = new EventEmitter<boolean>();

  logIn(dto : LoginRequest) : Observable<any>{
    return this.http.post(this.config.login_url, JSON.stringify(dto), {headers: this.headers, responseType: 'json'});
  }

  isLoggedIn(): boolean {
		if (!localStorage.getItem('JWT') && !localStorage.getItem("user")) {
				return false;
		}
		return true;
	}

  changeEvent() {
    this.changedEvent.emit(true);
  }

  setCurrentUser() {
    this._getCurrentUser().subscribe(res => {
      localStorage.setItem("user", JSON.stringify(res));
      this.changeEvent()
    });
  }

    _getCurrentUser() : Observable<UserResponse> {
      return this.http.get<UserResponse>(this.config.whoami_url)
    }

    getCurrentUser() : UserResponse {
      let user = localStorage.getItem("user");
      if(user) {
        return JSON.parse(user) as UserResponse;
      }
      return JSON.parse(user!) as UserResponse;
    }

  logOut() {
    localStorage.removeItem('JWT');
    localStorage.removeItem("user");
  }

  getRole() : string{
		const token = localStorage.getItem('JWT');
		const jwt: JwtHelperService = new JwtHelperService();
    if (!token) {return "";}
    const info = jwt.decodeToken(token);
    return info.role.authority;
  }

}
