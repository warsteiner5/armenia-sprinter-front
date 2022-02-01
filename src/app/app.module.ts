import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/header/components/menu/menu.component';
import { OrderComponent } from './layout/header/components/order/order.component';
import { Frame2Component } from './pages/frame2/frame2.component';
import { TitleComponent } from './pages/components/title/title.component';
import { SerchFormComponent } from './pages/components/serch-form/serch-form.component';
import { CardComponent } from './pages/components/card/card.component';
import { Frame1Component } from './pages/frame1/frame1.component';
import { ModalCardComponent } from './pages/components/modal-card/modal-card.component';
import { HeaderHomeComponent } from './layout/header/header-home/header-home.component';
import {TransferComponent} from "./pages/transfer/transfer.component";
import { CardMiniBusComponent } from './pages/components/card-mini-bus/card-mini-bus.component';
import { CardMicroBusComponent } from './pages/components/card-micro-bus/card-micro-bus.component';
import { CardBigBusComponent } from './pages/components/card-big-bus/card-big-bus.component';

  const appRoutes: Routes = [
    {path: '', component: Frame1Component },
    {path: 'allTransfer', component: Frame2Component },
    {path: 'selection', component: TransferComponent },

  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    OrderComponent,
    Frame2Component,
    TitleComponent,
    SerchFormComponent,
    CardComponent,
    Frame1Component,
    ModalCardComponent,
    HeaderHomeComponent,
    TransferComponent,
    CardMiniBusComponent,
    CardMicroBusComponent,
    CardBigBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
