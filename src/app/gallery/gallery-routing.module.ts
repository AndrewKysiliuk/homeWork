import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { AuthGuard } from '../auth.guard';
import { GalleryResolveService } from './gallery-resolve.service';
import { GalleryItemResolveService } from './gallery-item-resolve.service';

const galleryRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: {
      gallery: GalleryResolveService
    },
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
        resolve: {
          item: GalleryItemResolveService
        },
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
