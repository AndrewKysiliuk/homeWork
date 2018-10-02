import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyModuleModule} from './my-module/my-module.module';
import {MyService} from './MyService';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule
  ],
  providers: [
    MyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
