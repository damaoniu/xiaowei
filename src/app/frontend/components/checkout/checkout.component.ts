import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {Cart} from "../parts/cart/cart.component";
import {UserService} from "../../../shared/services/user/user.service";
@Component({
    selector:"checkout",
    templateUrl:"./checkout.html",
    encapsulation:ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit{

    constructor(private cartService:CartService,public userService:UserService){}
    get user(){
        return this.userService.getUser();
    }
    get cart(){
      return this.cartService.getCart();
    }
    ngOnInit():void {
    }

}