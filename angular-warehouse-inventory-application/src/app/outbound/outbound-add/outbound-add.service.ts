import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Outbound } from "../data/outbound";

@Injectable({
    providedIn: 'root',
  })
  export class OutboundAddService {
    private apiUrl = `${environment.apiUrl}/outbound`;
  
    constructor(private http: HttpClient) {}
  
    addOutbound(outboundData: Outbound): Observable<Outbound> {
      return this.http.post<Outbound>(this.apiUrl, outboundData);
    }

  }