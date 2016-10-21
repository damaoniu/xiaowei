import {Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, OnDestroy} from "@angular/core";
import {CartService} from "../../../../shared/services/cartService/cart.service";
import {Item} from "../../../../shared/services/cartService/item";
declare var jQuery:any;
declare var window:any;
// declare var localStorage:any;
let $j=jQuery.noConflict();
@Component({
    selector:"cart",
    templateUrl:"./cart.html",
    encapsulation:ViewEncapsulation.None,


})
export class Cart implements OnInit,OnDestroy{
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
    //use this reactive we to set up reactive properties
    get cart(){
        return this.cartService.getCart();
    }
    get itemsCount(){
        return this.cartService.getItemsCount();
    }
    deleteItem(item:Item){
        this.cartService.deleteItem(item);
    }
    ngOnInit(){
        this.cartService.addItem({id:"100",description:"est",price:12,name:"as",img_src:"adsd",quantity:1,discount:{rate:10,startTime:"23",endTime:'3',productId:"100"}})

        // localStorage.setItem("test","test")
        if ($j("header .cart").length > 0) {
            $j('header .cart .dropdown-toggle').on('click', function(e){
                $j("header .cart .dropdown").toggleClass('open');
                headerCartSize();
                e.preventDefault();
            });
            $j('header .cart .cart__close').on('click', function(e){
                $j("header .cart .dropdown").toggleClass('open');
                e.preventDefault();
            });
        }

        var $cart = $j(".cart");
        $j(window).resize(headerCartSize);
        function headerCartSize() {
            if ($cart.length) {
                $cart.find(".dropdown-menu").scrollTop(0)
                cartHeight();
            }
        }
        function cartHeight(){
            var $obj = $cart.find(".dropdown-menu");
            var w_height = window.innerHeight;
            var o_height = $obj.outerHeight();
            var delta = w_height - o_height;
            if(delta < 0) {
                $obj.css({"max-height": o_height + delta, "overflow": "auto", "overflow-x": "hidden" });
            }
        }


        function changeInputNameCartPage() {
            var name= "updates[]";
            if ($j(window).width() > 767) {
                $j(".input-mobile").attr("name", "");
                $j(".input-desktop").attr("name", name);
            }
            else {
                $j(".input-mobile").attr("name", name);
                $j(".input-desktop").attr("name", "");
            }
        }
        if ($j(".input-mobile").length && $j(".input-desktop").length ) {
            changeInputNameCartPage();
            $j(window).resize(changeInputNameCartPage);
        }


    }
    ngOnDestroy():void {
        this.cartService.itemAdded$.unsubscribe();
    }

}