import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ListItemsComponent } from '../list-items/list-items.component';
import { IItem } from '../../../../shared/models/item';
import { AppDataService } from '../../../../shared/services/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(ListItemsComponent) private _listItemsComponent: ListItemsComponent;  
  constructor(private _dataService: AppDataService) { }

  ngAfterViewInit() {    
  }

  checkout() {    
    this._dataService.checkoutItems(this._listItemsComponent.itemsInCart)
  }

}
