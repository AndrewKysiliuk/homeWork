import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';
import { HttpClientService } from './HttpClientService';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    GalleryModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
