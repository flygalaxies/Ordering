import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IItem } from '../../../../shared/models/item';
import { AppDataService } from '../../../../shared/services/app-data.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  itemForm: FormGroup;
  itemPhoto;
  // itemName = new FormControl();

  constructor(private _formBuilder: FormBuilder, private _dataService: AppDataService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.itemForm = this._formBuilder.group({
      itemName: ['', Validators.required],
      itemPrice: ['', Validators.required],
      itemPhoto: ['',],
      itemDescription: ['', Validators.required]
    })
  }

  submitItem() {
    let lastItemID: IItem = this._dataService.getAllItems()[this._dataService.getAllItems().length - 1];
    let date = new Date();
    let item: IItem = {
      'id': lastItemID.id + 1,
      'name': this.itemForm.value.itemName,
      'price': this.itemForm.value.itemPrice,
      'photo': this.itemPhoto,
      'description': this.itemForm.value.itemDescription,
      'date': date,
    }    
    this._dataService.setItem(item);
  }

  imageUplaoder(event) {
    const file = event.target.files[0];
    this.toBase64(file)
  }

  toBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);        
    reader.onload = () => {
      this.itemPhoto = reader.result;
      console.log(reader.result);
      btoa(reader.result)
    }
  }

}
