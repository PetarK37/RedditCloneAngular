import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportRequest, ReportResponse } from '../Model/Report';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private config: ConfigService) {
  
   }

   getAll(): Observable<ReportResponse[]> {
    return this.http.get<ReportResponse[]>(this.config.reports_url); 
   }

   getAllByCommunity(id: number): Observable<ReportResponse[]> {
    return this.http.get<ReportResponse[]>(this.config.getReportsByCommunityUrl(id));
    }

   getOne(id: number): Observable<ReportResponse> {
      return this.http.get<ReportResponse>(this.config.getOneReportUrl(id));
    }

    createReport(dto: ReportRequest): Observable<ReportResponse> {
      return this.http.post<ReportResponse>(this.config.reports_url, JSON.stringify(dto), {headers: this.headers})
    };

    updateReport(dto: boolean,id : number): Observable<ReportResponse> {
      return this.http.put<ReportResponse>(this.config.getOneReportUrl(id), JSON.stringify(dto), {headers: this.headers})
    }

    deleteReport(id: number): Observable<ReportResponse> {
      return this.http.delete<ReportResponse>(this.config.getOneReportUrl(id))
    }
}

