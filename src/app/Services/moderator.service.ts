import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeratorResponse } from '../Model/moderator';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getByUserAndCommunity(userId: Number, communityId: Number) : Observable<ModeratorResponse> {
    return this.http.get<ModeratorResponse>(this.config.getModeratorByUserAndCommunity(userId, communityId));
  }
}
