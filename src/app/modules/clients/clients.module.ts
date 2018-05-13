import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRouting } from './clients.routing';
import { HomeComponent } from './components/home/home.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { MainModule } from '../main.module';

@NgModule({
  imports: [
    ClientsRouting,
    MainModule,
  ],
  declarations: [HomeComponent, ListItemsComponent],
  providers: [ListItemsComponent]
})
export class ClientsModule { }
