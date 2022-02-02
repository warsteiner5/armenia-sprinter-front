import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-big-bus',
  templateUrl: './card-big-bus.component.html',
  styleUrls: ['./card-big-bus.component.scss']
})
export class CardBigBusComponent implements OnInit {

  PortFrom:string = 'Москва';
  PortTo:string = 'Симферополь';
  ticketPrice:number = 17000;
  ticketPriceRus:number = 5000;
  
  ticket:string[] | any;

  constructor() { }

  ngOnInit(): void {
  }

}
