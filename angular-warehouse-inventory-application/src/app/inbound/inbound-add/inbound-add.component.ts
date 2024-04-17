import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inbound } from '../data/inbound';
import { InboundAddService } from './inbound-add.service';

@Component({
  selector: 'inbound-add',
  templateUrl: './inbound-add.component.html',
  styleUrls: ['./inbound-add.component.css']
})
export class InboundAddComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  submissionSuccess: boolean = false;
  message: string = '';
  showMessage: boolean = false;

  newInboundItem: Inbound = {
    id: 0,  
    reference: '',  
    dateReceived: new Date(),  
    sku: '',  
    location: '',  
    quantity: 0,  
    remarks: '',  
    supplier: {  
      id: 0,  
      name: '',  
      address: '',  
      contact: '' 
    }
  };
  constructor(private inboundAddService: InboundAddService) {} 

  ngOnInit() {
  }

  submitForm(): void {
    this.inboundAddService.addInbound(this.newInboundItem).subscribe((data: Inbound) => {
      console.log(data);
      this.submissionSuccess = true;
      this.message = 'Inventory has been updated.';
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false; 
      }, 7000);
    });
}
  closeDialogAdd() {
    this.closeDialog.emit();
    window.location.reload();
 }

}
