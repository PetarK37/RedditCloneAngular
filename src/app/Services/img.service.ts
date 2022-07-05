import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient, private config: ConfigService) {
  
  }

  private headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});


  getImg(name: string) {
    return (this.config.img_url + '/' + name);
  }

  saveImg(formData : FormData): Observable<any> {
    return this.http.post(this.config.img_url, formData);
  }
}
