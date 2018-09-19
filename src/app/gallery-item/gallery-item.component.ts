import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() item;
  @Output() delId = new EventEmitter<number>();
  constructor() { }

  deleteId() {
    this.delId.emit(this.item.id);
  }
  ngOnInit() {
  }

}
