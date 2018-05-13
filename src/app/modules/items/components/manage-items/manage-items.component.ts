import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../../../shared/services/app-data.service';
import { IItem } from '../../../../shared/models/item';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss']
})
export class ManageItemsComponent implements OnInit {
  
  items: IItem[];
  public query: any = '';

  constructor(private _dataService: AppDataService) { }

  ngOnInit() {
    this.items = this._dataService.getAllItems();
  }

  searchItem() {
    console.log("searching");
  }
}
