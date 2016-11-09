import {
    Component, Input, ViewChild, ElementRef, AfterContentInit, AfterViewInit,
    ViewEncapsulation, NgZone
} from "@angular/core";
import {Item} from "../../../../shared/services/cartService/item";
import {CartService} from "../../../../shared/services/cartService/cart.service";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"addToCart",
    templateUrl:"./addToCart.html",
    encapsulation:ViewEncapsulation.None
})
export class AddToCart{
    @Input('item') item:Item;
    @Input('showQty') showQty:boolean;
    @ViewChild('counter') counter:ElementRef;
    @ViewChild('quantity') quantity:ElementRef;
    constructor(public _cartService:CartService,private zone:NgZone){
    }
    get inCart(){
       return this._cartService.getItem(this.item.id);
    }
    get cartItem(){

        if (this.inCart) {
            return this.inCart;
        } else {
            return {id: this.item.id, item: this.item, quantity: 0}
        }

    }
    set cartItem(item){
         this.cartItem=item;
    }
    updateQuantity(newQuantity){
        if(newQuantity==""||isNaN(newQuantity)){
            newQuantity=0
        };
        newQuantity=newQuantity||0;
        if(newQuantity==null ||newQuantity==''){newQuantity =0};
        if(this.inCart){
            this.addToCart(-this.cartItem.quantity);
        }
        this.addToCart(newQuantity)
        if(newQuantity==0){
            this._cartService.deleteItem(this.inCart);
            this.cartItem={id:this.item.id,item:this.item,quantity:0};
        }

    }
    addToCart(quantity=1){
        this._cartService.addItem(this.item,quantity);
    }
}