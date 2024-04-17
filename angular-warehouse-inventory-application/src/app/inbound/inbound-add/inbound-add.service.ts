import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Inbound } from "../data/inbound";

@Injectable({
    providedIn: 'root',
  })
  export class InboundAddService {
    private apiUrl = `${environment.apiUrl}/inbound`;
  
    constructor(private http: HttpClient) {}
  
    addInbound(inboundData: Inbound): Observable<Inbound> {
      return this.http.post<Inbound>(this.apiUrl, inboundData);
    }

  }