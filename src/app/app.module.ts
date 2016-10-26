import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Front} from "./frontend/front.module";
import {CartService} from "./shared/services/cartService/cart.service";
import {UserService} from "./shared/services/user/user.service";
import {UxvRoutingModule} from "./app-routing.module";


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
      CartService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
