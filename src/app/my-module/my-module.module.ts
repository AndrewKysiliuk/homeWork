import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from '../gallery/gallery.component';
import {GalleryItemComponent} from '../gallery-item/gallery-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
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
