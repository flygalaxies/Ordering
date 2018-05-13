import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../../../shared/services/app-data.service';
import { IItem } from '../../../../shared/models/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: IItem[];
  itemsInCart: IItem[];
  query: any;

  constructor(private _dataService: AppDataService) {
    this.itemsInCart = new Array();
  }

  ngOnInit() {
    this.items = this._dataService.getAllItems();
  }

  selectItem(id) {
    let isInCart: boolean;
    let item = <HTMLElement>document.getElementById(id);
    let itemToAdd = this._dataService.getSingleItem(id);
    itemToAdd.date = new Date();
    item.style.boxShadow = "0px 1px 5px 3px rgba(0, 0, 0, 0.2)";
    if (this.itemsInCart.length > 0) {
      for (let i = 0; i < this.itemsInCart.length; i++) {
        if (this.itemsInCart[i].id == itemToAdd.id) {
          isInCart = true;
          break;
        }
      }
      if (isInCart) {
        console.log("ITEM IS IN CART");
        this.deselectItem(itemToAdd.id)
      } else {
        console.log("ITEM IS NOT IN CART");
        this.itemsInCart.push(itemToAdd);
      }
    } else {
      this.itemsInCart.push(itemToAdd);
    }
    console.log(this.itemsInCart);
  }
  deselectItem(id) {
    let item = <HTMLElement>document.getElementById(id);
    item.style.boxShadow = "0px 1px 3px 1px rgba(0, 0, 0, 0.2)";
    this.itemsInCart = this.itemsInCart.filter(result => {
      return result.id !== id;
    })
  }
}
