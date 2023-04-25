import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {ConfigService} from './config.service';


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient, private config: ConfigService) {
  
  }

  getPdf(name: string) {
    return (this.config.pdf_url + '/' + name);
  }
}

