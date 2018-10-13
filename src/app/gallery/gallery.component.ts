import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../HttpClientService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryItems: Pet[] = [];

  constructor(private service: HttpClientService, private router: Router) {}

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

  goToCreate() {
    this.router.navigate(['/create']);
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
