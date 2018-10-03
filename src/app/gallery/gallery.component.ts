import { Component, OnInit } from '@angular/core';
import {MyService} from '../MyService';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pet: Pet = new Pet();
  galleryItems: Pet[] = null;

  constructor(private service: MyService) {}

  deleteItem(id: number) {
    this.service.delRecord(id);
  }

  createItem() {
   const newPet = new Pet();
   newPet.setData(this.pet.id, this.pet.url, this.pet.title);
   this.service.newRecord(newPet);
   this.pet.id = null;
   this.pet.url = '';
   this.pet.title = '';
  }

  ngOnInit() {
    // this.service.initLocalStorage(); // розкоментувати для наповнення localStorage даними
    this.service.init();
    this.galleryItems = this.service.getData();
  }

}
export class Pet {
  id: number;
  url: string;
  title: string;

  setData(Id: number, Url: string, Title: string) {
    this.id = Id;
    this.url = Url;
    this.title = Title;
  }
}
