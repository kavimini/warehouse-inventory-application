import { Component, OnInit } from '@angular/core';
import { Outbound } from './data/outbound';
import { OutboundService } from './outbound.service';

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.css']
})
export class OutboundComponent implements OnInit {
  outbound: Outbound[] = []; 

  isOutboundAdd: boolean = false; 

  constructor(private outboundService: OutboundService) {} 

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.outboundService.getData().subscribe(
      (data: Outbound[]) => {
        this.outbound = data;
        console.log(this.outbound);
      }
    );
  }

  addOutbound(){
    this.isOutboundAdd = true;
  }

  closeDialogAdd(){
    this.isOutboundAdd = false;
  }

}

