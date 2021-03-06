import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { FormsModule } from '@angular/forms';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { RouterModule} from '@angular/router';
import { GalleryRoutingModule} from './gallery-routing.module';
import { GalleryResolveService} from './gallery-resolve.service';
// import { GalleryItemResolveService} from './gallery-item-resolve.service';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {TruncatePipePipe} from '../truncate-pipe.pipe';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GalleryRoutingModule,
    materialModules,
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    ItemCreateComponent,
    ItemPageComponent,
    TruncatePipePipe
  ],
  entryComponents: [
    ItemPageComponent,
  ],
  exports: [
    ItemCreateComponent,
    GalleryComponent,
    GalleryItemComponent,
    ItemPageComponent,
  ],
  providers: [GalleryResolveService, /*GalleryItemResolveService*/]
})
export class GalleryModule { }
