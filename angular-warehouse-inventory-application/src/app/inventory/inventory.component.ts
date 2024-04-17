import { Component, OnInit } from '@angular/core';
import { Inventory } from './data/inventory';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[] = []; 
  inventoryId: number | null = null;

  isInventoryUpdate: boolean = false; 
  isInventoryAdd: boolean = false; 
  
  constructor(private inventoryService: InventoryService) {} 

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.inventoryService.getData().subscribe(
      (data: Inventory[]) => {
        this.inventories = data;
        console.log(this.inventories);
      }
    );
  }

  addInventory(){
    this.isInventoryAdd = true;
  }

  closeDialogAdd(){
    this.isInventoryAdd = false;
  }

  updateInventory(inventoryId: number) {
    this.inventoryId = inventoryId;
    this.isInventoryUpdate = true;
  }

  closeDialogUpdate(){
    this.isInventoryUpdate = false;
  }

  onSearch(query: string): void {
    this.inventoryService.search(query).subscribe(
      (data: Inventory[]) => {
        this.inventories = data;
        console.log(this.inventories);
      }
    );
  }

}
