import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransferComponent} from "./transfer/transfer.component";
import { Frame2Component } from './frame2/frame2.component';
import { TitleComponent } from './components/title/title.component';
import { SerchFormComponent } from './components/serch-form/serch-form.component';
import { CardComponent } from './components/card/card.component';
import { Frame1Component } from './frame1/frame1.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';
import { CardMiniBusComponent } from './components/card-mini-bus/card-mini-bus.component';
import { CardMicroBusComponent } from './components/card-micro-bus/card-micro-bus.component';
import { CardBigBusComponent } from './components/card-big-bus/card-big-bus.component';



@NgModule({
  declarations: [
    TransferComponent,
    Frame2Component,
    TitleComponent,
    SerchFormComponent,
    CardComponent,
    Frame1Component,
    ModalCardComponent,
    CardMiniBusComponent,
    CardMicroBusComponent,
    CardBigBusComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
