import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Inventory } from "./data/inventory";

@Injectable({
    providedIn: 'root',
  })
  export class InventoryService {
    private apiUrl = `${environment.apiUrl}/inventories`;
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<Inventory[]> {
      return this.http.get<Inventory[]>(this.apiUrl);
    }

    search(query: string): Observable<Inventory[]> {
      return this.http.get<Inventory[]>(`${this.apiUrl}/search?keyword=${query}`);
    }

  }