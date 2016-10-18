import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UxvRoutingModule} from "./app-routing.module";
import {Front} from "./frontend/front.module";
import {CartService} from "./shared/services/cartService/cart.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Front,
    HttpModule,
    UxvRoutingModule
  ],
  providers: [
      CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
