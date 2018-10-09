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
    let delIndex = null;
    this.galleryItems.forEach((item, index) => {
      if (item.id === id) {
        delIndex = index;
      }
    });
    this.service.delRecord(id).subscribe(
      data => this.galleryItems.splice(delIndex, 1),
      error => console.log(error)
    );
  }

  createItem() {
   const newPet = new Pet();
   newPet.setData(this.pet.id, this.pet.url, this.pet.title);
   this.service.newRecord(newPet).subscribe(data => this.galleryItems.unshift(newPet), error => console.log(error));
   this.pet.id = null;
   this.pet.url = '';
   this.pet.title = '';
  }

  ngOnInit() {
   this.service.httpGet().subscribe( (data: Pet[]) => this.galleryItems = data);
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
