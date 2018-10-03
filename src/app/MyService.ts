import {Injectable} from '@angular/core';
import {galleryItems} from './base';
import {Pet} from './gallery/gallery.component';

@Injectable()

export class MyService {
  private gallery: Pet[] = [];
  initLocalStorage() {
    galleryItems.forEach((value, index) => {
      localStorage.setItem(`${value.id}`, JSON.stringify(value));
      console.log(`${value.id}`);
    });
  }

  init(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        this.gallery.push(data);
      }
    }
  }

  getData() {
    return this.gallery;
  }
  newRecord(val: Pet): void {
    this.gallery.unshift(val);
    localStorage.setItem(`${val.id}`, JSON.stringify(val));
  }
  delRecord(id: number): void{
    let delIndex = null;
    this.gallery.forEach((item, index) => {
      if (item.id === id) {
        delIndex = index;
      }
    });
    this.gallery.splice(delIndex, 1);
    localStorage.removeItem(`${id}`);
  }
}
