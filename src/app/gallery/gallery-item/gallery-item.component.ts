import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pet } from '../gallery.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() item: Pet;
  @Output() delId = new EventEmitter<number>();
  constructor(private router: Router) { }

  deleteId() {
    this.delId.emit(this.item.id);
  }
  goToItemPage(id: number){
    this.router.navigate(['item', id]);
  }
  ngOnInit() {
  }

}
