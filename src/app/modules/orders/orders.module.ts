import { NgModule } from '@angular/core';
import { MainModule } from '../main.module';

import { OrdersRouting } from './orders.routing';
import { HomeComponent } from './components/home/home.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  imports: [
    MainModule,
    OrdersRouting
  ],
  declarations: [HomeComponent, OrderListComponent]
})
export class OrdersModule { }
