import { Component, OnInit } from '@angular/core';
import { Inbound } from './data/inbound';
import { InboundService } from './inbound.service';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.css']
})
export class InboundComponent implements OnInit {
  inbound: Inbound[] = []; 

  isInboundAdd: boolean = false; 

  constructor(private inboundService: InboundService) {} 

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.inboundService.getData().subscribe(
      (data: Inbound[]) => {
        this.inbound = data;
        console.log(this.inbound);
      }
    );
  }

  addInbound(){
    this.isInboundAdd = true;
  }

  closeDialogAdd(){
    this.isInboundAdd = false;
  }

}
