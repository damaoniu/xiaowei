import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {Cart} from "../parts/cart/cart.component";
import {UserService} from "../../../shared/services/user/user.service";
import {OrderService} from "../../../shared/services/orders/order.service";
@Component({
    selector:"checkout",
    templateUrl:"./checkout.html",
    encapsulation:ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit{

    constructor(private cartService:CartService,private userService:UserService,private orderService:OrderService){}
    get user(){
        return this.userService.getUser();
    }
    get cart(){
      return this.cartService.getCart();
    }
    payCart(){
        this.orderService.payCart(this.cart)
            .subscribe(data=>{});
    }
    ngOnInit():void {
    }

}