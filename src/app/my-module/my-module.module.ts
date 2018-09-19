import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from '../gallery/gallery.component';
import {GalleryItemComponent} from '../gallery-item/gallery-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent
  ],
  exports: [
    GalleryComponent,
    GalleryItemComponent
  ]
})
export class MyModuleModule { }
