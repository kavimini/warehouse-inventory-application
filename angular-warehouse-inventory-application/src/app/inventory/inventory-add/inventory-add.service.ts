import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Inventory } from "../data/inventory";

@Injectable({
    providedIn: 'root',
  })
  export class InventoryAddService {
    private apiUrl = `${environment.apiUrl}/inventories`;
  
    constructor(private http: HttpClient) {}
  
    addInventory(inventoryData: Inventory): Observable<Inventory> {
      
      return this.http.post<Inventory>(this.apiUrl, inventoryData);
    }

  }