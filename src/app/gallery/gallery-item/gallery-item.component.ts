import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Pet } from '../../Pet';
import { MatDialog } from '@angular/material';
import { ItemPageComponent } from '../item-page/item-page.component';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() item: Pet;
  @Output() delId = new EventEmitter<number>();

  constructor(private matDialog: MatDialog) {
  }

  deleteId() {
    this.delId.emit(this.item.id);
  }

  openDialog() {
    this.matDialog.open(ItemPageComponent, {
      data: {image: this.item.url}
    });
  }
}
