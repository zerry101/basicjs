import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string;
  private documentUrl1: string;
  private documentUrl2: string;
  private documentLocalUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
    this.documentUrl1 = environment.documentBaseUrl1;
    //this.documentUrl2 = environment.documentBaseUrl2;
    //this.documentLocalUrl = environment.documentLocalUrl;
  }

  lookupMember(memberId: string, birthDate: string, lastName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}registration/member`, { params: { memberId, dateOfBirth: birthDate, lastName } });
  }

  getMemberInformation(): Observable<any> {
    return this.http.get(`${this.baseUrl}member/`);
  }

  getMemberClaims(): Observable<any> {
    return this.http.get(`${this.baseUrl}member/claim`);
  }

  getMemberClaim(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}member/claim/${id}`);
  }

  getMemberBenefits(): Observable<any> {
    return this.http.get(`${this.baseUrl}member/benefit`);
  }

  getMemberPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}member/payment`);
  }

  getMemberServicesAgreementToken(): Observable<any> {
    return this.http.get(`${this.baseUrl}member/fulfillment/msatoken`);
  }

  getDocuments(memberId): Observable<any> {  
    return this.http.get(`${this.documentUrl1}?id=${memberId}&idType=Member&productId=0`);
  }
}
