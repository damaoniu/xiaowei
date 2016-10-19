import {Component, Input} from "@angular/core";
import {Item} from "../../../../shared/services/cartService/item";
import {CartService} from "../../../../shared/services/cartService/cart.service";
@Component({
    selector:"addToCart",
    templateUrl:"./addToCart.html"
})
export class AddToCart{
    @Input('item') item:Item;
    constructor(public _cartService:CartService){}
    addToCart(){
        this._cartService.addItem(this.item);
    }

}