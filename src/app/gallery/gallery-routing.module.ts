import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { AuthGuard } from '../auth.guard';
import { GalleryResolveService } from './gallery-resolve.service';

const galleryRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GalleryComponent,
        resolve: {
          gallery: GalleryResolveService
        },
      },
      {
        path: 'new',
        component: ItemCreateComponent
      },
      // {
      //   path: ':id',    /*?????????*/
      //   component: ItemPageComponent
      // }
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
