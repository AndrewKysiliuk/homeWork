import { Component, OnInit } from '@angular/core';
import {MyService} from '../MyService';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  petId: number;
  petUrl: string;
  petTitle: string;
  petType: string;
  galleryItems: any[] = null;
  option: string[] = ['cat', 'dog', 'parrot'];

  constructor(private service: MyService) {}


  deleteItem(id) {
    this.service.delRecord(id);
  }

  createItem() {
   let item = null;
   item = {
     id: this.petId,
     url: this.petUrl,
     title: this.petTitle
   };
   this.service.newRecord(item);
   this.petId = null;
   this.petUrl = '';
   this.petTitle = '';
  }

  ngOnInit() {
    this.petType = this.option[0];
    this.galleryItems = this.service.getData();
  }

}
