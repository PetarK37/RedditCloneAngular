import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flair } from '../Model/flair';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FlairService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  deleteFlair(communityId : number, flairId : String) : Observable<string>{
    return this.http.delete<string>(this.config.delete_flair_url(communityId, flairId));
  }
}
