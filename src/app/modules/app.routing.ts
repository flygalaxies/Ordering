import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from '../app.component';
import { ItemsModule } from './items/items.module';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';



const appRoutes: Routes = [
  { path: 'items', loadChildren: () => ItemsModule },
  { path: 'clients', loadChildren: () => ClientsModule },
  { path: 'orders', loadChildren: () => OrdersModule },
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);