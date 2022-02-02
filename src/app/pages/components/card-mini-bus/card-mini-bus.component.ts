import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-mini-bus',
  templateUrl: './card-mini-bus.component.html',
  styleUrls: ['./card-mini-bus.component.scss']
})
export class CardMiniBusComponent implements OnInit {

  PortFrom:string = 'Токио';
  PortTo:string = 'Севан';
  ticketPrice:number = 16870;
  ticketPriceRus:number = 500;
  
  ticket:string[] | any;

  constructor() { }

  ngOnInit(): void {
  }

}
