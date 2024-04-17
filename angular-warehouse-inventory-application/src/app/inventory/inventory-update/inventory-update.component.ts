import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Inventory } from '../data/inventory';
import { InventoryUpdateService } from './inventory-update.service';

@Component({
  selector: 'inventory-update',
  templateUrl: './inventory-update.component.html',
  styleUrls: ['./inventory-update.component.css']
})
export class InventoryUpdateComponent implements OnInit {
  @Input() inventoryId: number | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  inventoryDetails: Inventory | any;
  initialized: boolean = false;
  updatedInventory: Inventory | any;

  constructor(private inventoryUpdateService: InventoryUpdateService) {} 

  ngOnInit() {
    this.initialized = true; 
  }

  ngOnChanges(changes: SimpleChanges): void {
    //check component initialization before processing carId changes
    if (this.initialized) {
      const inventoryIdChange = changes['inventoryId'];
      if (inventoryIdChange && this.inventoryId !== null) {
        this.findInventory();
      }
    }
  }

  findInventory() {
    this.inventoryUpdateService.getInventoryDetails(this.inventoryId).subscribe(
      (data: Inventory) => {
        this.inventoryDetails = data;
      }
    );
  }

  submitForm() {
    this.inventoryUpdateService.updateInventory(this.inventoryDetails).subscribe((data: Inventory) => {
        this.inventoryDetails = data;
      });
  }
  


  closeDialogUpdate() {
    this.closeDialog.emit();
    window.location.reload();
 }

}
