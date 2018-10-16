import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';
import {RouterModule} from '@angular/router';
import {GalleryRoutingModule} from './gallery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    ItemCreateComponent,
    ItemPageComponent
  ],
  exports: [
    ItemCreateComponent,
    GalleryComponent,
    GalleryItemComponent,
    ItemPageComponent
  ]
})
export class GalleryModule { }
