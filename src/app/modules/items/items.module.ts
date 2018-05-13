import { NgModule } from '@angular/core';

import { ItemsRouting } from './items.routing';
import { HomeComponent } from './components/home/home.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { MainModule } from '../main.module';

@NgModule({
  imports: [
    ItemsRouting,
    MainModule
  ],
  declarations: [HomeComponent, ManageItemsComponent, CreateItemComponent]
})
export class ItemsModule { }
