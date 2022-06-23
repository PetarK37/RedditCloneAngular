import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeratorRequest, ModeratorResponse } from '../Model/moderator';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  private headers = new HttpHeaders().set('Content-Type','application/json')

  public getByUserAndCommunity(userId: Number, communityId: Number) : Observable<ModeratorResponse> {
    return this.http.get<ModeratorResponse>(this.config.getModeratorByUserAndCommunity(userId, communityId));
  }

  public saveModerater(dto: ModeratorRequest) : Observable<ModeratorResponse> {
    return this.http.post<ModeratorResponse>(this.config.moderators_url, JSON.stringify(dto), {headers: this.headers});
  }

  public getAllByCommunity(id : Number) : Observable<ModeratorResponse[]> {
    return this.http.get<ModeratorResponse[]>(this.config.getModeratorsByCommunity(id));
  }

  public removeModer(id : Number) : Observable<ModeratorResponse> {
    return this.http.delete<ModeratorResponse>(this.config.moderators_url + "/" + id);
  }
}
