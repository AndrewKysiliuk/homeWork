import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../HttpClientService';
import { ActivatedRoute, Router} from '@angular/router';
import { Pet } from '../Pet';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryItems: Pet[] = [];

  constructor(
    private service: HttpClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    this.router.navigate(['gallery/new']);
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.galleryItems = data.gallery);
  }
}
