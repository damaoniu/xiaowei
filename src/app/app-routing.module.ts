import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from "./frontend/components/home/home.component";

const routes: Routes = [
  {path:"",component:Home},

  {path:"account",loadChildren:"app/account/account.module#Account"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class UxvRoutingModule { }
