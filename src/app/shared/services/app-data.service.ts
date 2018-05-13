import { Injectable } from '@angular/core';
import { IItem } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private items: IItem[];
  private purchasedItems: IItem[];
  constructor() {
    this.items = new Array();
    let date = new Date();
    // let item1: IItem = {
    //   "id": 1,
    //   "name": "Item1",
    //   "price": 42,
    //   "photo": "",
    //   "description": "This is a valid description",
    //   "date": date
    // }
    // this.items.push(item1)
    // let item2: IItem = {
    //   "id": 2,
    //   "name": "Item2",
    //   "price": 24,
    //   "photo": "",
    //   "description": "asdfasdfawef",
    //   "date": date
    // }
    // this.items.push(item2)
  }

  setItem(item: IItem) {
    this.items.push(item);
  }
  getAllItems() {
    return this.items;
  }
  getSingleItem(id) {
    let obj = this.items.filter(result => result.id === id)
    return obj[0];
  }

  getAllPurchasedItems() {
    return this.purchasedItems;
  }
  checkoutItems(items: IItem[]) {
    this.purchasedItems = items;
  }
}
