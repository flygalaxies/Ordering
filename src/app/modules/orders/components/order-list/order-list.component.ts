import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../../../shared/services/app-data.service';
import { IItem } from '../../../../shared/models/item';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  items: IItem[];

  constructor(private _dataService: AppDataService) { }

  ngOnInit() {
    this.items = this._dataService.getAllPurchasedItems();    
  }

  selectItem(id) {
    this.items = this.items.filter(result => {
      return result.id !== id;
    })
    console.log(this.items);
    this._dataService.checkoutItems(this.items);
  }

}
