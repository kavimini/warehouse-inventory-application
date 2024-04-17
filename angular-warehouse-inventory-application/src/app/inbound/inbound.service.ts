import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Inbound } from "./data/inbound";

@Injectable({
    providedIn: 'root',
  })
  export class InboundService {
    private apiUrl = `${environment.apiUrl}/inbound`;
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<Inbound[]> {
      return this.http.get<Inbound[]>(this.apiUrl);
    }

  }