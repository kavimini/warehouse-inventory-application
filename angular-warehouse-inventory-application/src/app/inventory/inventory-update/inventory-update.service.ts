import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { Inventory } from "../data/inventory";

@Injectable({
    providedIn: 'root',
  })
  export class InventoryUpdateService {
    private apiUrl = `${environment.apiUrl}/inventories`;
  
    constructor(private http: HttpClient) {}

    getInventoryDetails(inventoryId: any): Observable<Inventory> {
      const apiUrl = `${this.apiUrl}/${inventoryId}`;
      return this.http.get<Inventory>(apiUrl);
    }
  
    updateInventory(inventoryData: Inventory): Observable<Inventory> {
      const apiUrl = `${this.apiUrl}/${inventoryData.id}`;

      const updatedInventoryItem: Partial<Inventory> = {
        category: inventoryData.category,
        sku: inventoryData.sku,
        name: inventoryData.name,
        location: inventoryData.location,
        quantity: inventoryData.quantity
      };
  
      return this.http.put<Inventory>(apiUrl, updatedInventoryItem);
    }

  }