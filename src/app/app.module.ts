import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Front} from "./frontend/front.module";
import {CartService} from "./shared/services/cartService/cart.service";
import {UserService} from "./shared/services/user/user.service";
import {UxvRoutingModule} from "./app-routing.module";
import {CategoryService} from "./shared/services/category/category.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ImgUrlPipe} from "./shared/pipes/imgUrl.pipe";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Front,
    HttpModule,
    NgbModule.forRoot(),
    UxvRoutingModule
  ],
  providers: [
      CartService,
      UserService,
      CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
