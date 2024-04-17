import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Outbound } from '../data/outbound';
import { OutboundAddService } from './outbound-add.service';

@Component({
  selector: 'outbound-add',
  templateUrl: './outbound-add.component.html',
  styleUrls: ['./outbound-add.component.css']
})
export class OutboundAddComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  submissionSuccess: boolean = false;
  message: string = '';
  showMessage: boolean = false;

  outbound: Outbound = {
    id: 0,
    reference: '',
    dateShipped: new Date(),
    sku: '',
    quantity: 0,
    remarks: '',
    destination: '',
    customer: {
      id: 0,
      name: '',
      address: '',
      contact: ''
    },
  };
  
  constructor(private outboundAddService: OutboundAddService) {} 

  ngOnInit() {
  }

  submitForm(): void {
    this.outboundAddService.addOutbound(this.outbound).subscribe((data: Outbound) => {
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
