import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from '../gallery/gallery.component';
import {GalleryItemComponent} from '../gallery-item/gallery-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
