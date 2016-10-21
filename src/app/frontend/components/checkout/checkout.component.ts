import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {Cart} from "../parts/cart/cart.component";
@Component({
    selector:"checkout",
    templateUrl:"./checkout.html",
    encapsulation:ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit{
    constructor(private cartService:CartService){}
    get cart(){
      return this.cartService.getCart();
    }
    ngOnInit():void {
    }

}