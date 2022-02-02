import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-micro-bus',
  templateUrl: './card-micro-bus.component.html',
  styleUrls: ['./card-micro-bus.component.scss']
})
export class CardMicroBusComponent implements OnInit {

  PortFrom:string = 'Киев';
  PortTo:string = 'Дикий запад';
  ticketPrice:number = 16800;
  ticketPriceRus:number = 7000;
  
  ticket:string[] | any;

  constructor() { }

  ngOnInit(): void {
  }

}
