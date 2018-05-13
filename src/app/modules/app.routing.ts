import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from '../app.component';



const appRoutes: Routes = [  
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },
  { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);