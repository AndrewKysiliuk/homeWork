import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';

const galleryRoutes: Routes = [
  {
    path: 'gallery',
    children: [
      {
        path: '',
        component: GalleryComponent
      },
      {
        path: 'new',
        component: ItemCreateComponent
      },
      {
        path: ':id',
        component: ItemPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(galleryRoutes)
  ],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
