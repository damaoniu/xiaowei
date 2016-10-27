import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Front} from "./frontend/front.module";
import {CartService} from "./shared/services/cartService/cart.service";
import {UserService} from "./shared/services/user/user.service";
import {UxvRoutingModule} from "./app-routing.module";
// import ApolloClient,{createNetworkInterface} from "apollo-client";
import {AppConfig} from "./app.config";
// import {ApolloModule} from "angular2-apollo/build/src/index";

/*apollo client*/

// const client = new ApolloClient({
//   networkInterface:createNetworkInterface(AppConfig.graphqlUrl)
// });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // ApolloModule.withClient(client),
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
