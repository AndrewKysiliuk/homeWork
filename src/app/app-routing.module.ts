import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ItemCreateComponent} from './gallery/item-create/item-create.component';
import {ItemPageComponent} from './gallery/item-page/item-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: 'create',
    component: ItemCreateComponent
  },
  {
    path: 'item/:id',
    component: ItemPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}



