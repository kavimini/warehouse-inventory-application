import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryAddService } from './inventory-add.service';
import { Inventory } from '../data/inventory';

@Component({
  selector: 'inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  newInventoryItem: Inventory = {  
    id: 0, 
    category: '',
    sku: '',
    name: '',
    location: '',
    quantity: 0 
  };
  constructor(private inventoryAddService: InventoryAddService) {} 

  ngOnInit() {
  }

  submitForm(): void {
    this.inventoryAddService.addInventory(this.newInventoryItem).subscribe((data: Inventory) => {
      console.log(data);
    });
}


  closeDialogAdd() {
    this.closeDialog.emit();
    window.location.reload();
 }

}
