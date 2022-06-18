import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bannedRequest, bannedResponse } from '../Model/ban';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BannedService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public saveBan(dto : bannedRequest) : Observable<bannedRequest> {
    return this.http.post<bannedRequest>(this.config.banned_url, dto);
  }

  public deleteBan(userId : Number, communityId : Number) : Observable<bannedResponse> {
    return this.http.delete<bannedResponse>(this.config.delteBanUrl(userId, communityId));
  }
}
