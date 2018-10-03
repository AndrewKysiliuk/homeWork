import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Pet} from '../gallery/gallery.component';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() item: Pet;
  @Output() delId = new EventEmitter<number>();
  constructor() { }

  deleteId() {
    this.delId.emit(this.item.id);
  }
  ngOnInit() {
  }

}
