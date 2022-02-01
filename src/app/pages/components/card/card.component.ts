import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  PortFrom:string = 'Ереван';
  PortTo:string = 'Аэропорт «Звартноц»';
  ticketPrice:number = 15000;
  ticketPriceRus:number = 2323;
  
  ticket:string[] | any;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
