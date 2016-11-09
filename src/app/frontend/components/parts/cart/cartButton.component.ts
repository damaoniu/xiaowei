import {Component, ViewChild, ElementRef} from "@angular/core";
import {CartService} from "../../../../shared/services/cartService/cart.service";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"cart-button",
    templateUrl:'./cartButton.html'
})
export class CartButtonComponent{
    cartIsOpen:boolean=false;
    @ViewChild("badge") badge:ElementRef;
    constructor( private _elf:ElementRef,public  cartService:CartService    ){
        let that = this;
        cartService.itemAdded$.subscribe((item)=>{
            $j(this.badge.nativeElement).removeClass('magictime puffIn');
            setTimeout(function () {
                $j(that.badge.nativeElement).addClass('magictime puffIn');
            },20)
        })
    }
    get itemsCount(){
        return this.cartService.getItemsCount();
    }
}