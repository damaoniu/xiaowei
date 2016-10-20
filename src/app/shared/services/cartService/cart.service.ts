import {Injectable, NgZone} from "@angular/core";
import {Item} from "./item";
import {EventEmitter} from "@angular/forms/src/facade/async";
//this is the better way to use no typescript libraries
declare var _:any;
declare var localStorage:any;
let cart="cart";
@Injectable()
export class CartService{
    public cart:Item[]=[];
    public itemAdded$:EventEmitter<Item>;
    public itemDeleted$:EventEmitter<Item>;
    constructor(public _ngzone:NgZone){
        this.itemAdded$=new EventEmitter();
        this.itemDeleted$=new EventEmitter();
        if(localStorage.getItem(cart)){
            this.cart=JSON.parse(localStorage.getItem(cart));
        }else {
            this.cart=[{id:"4",name:"test",price:23,description:"very good stuff",img_src:"adsdf"}]
        }
    }
    setCart(value){
        this.cart=value;
    }
    getCart(){
        return this.cart
    }
    getItemsCount():number{
        return this.cart.length;
    }
    addItem(item:Item){
        if(_.findWhere(this.cart,{id:item.id})){

        }else{
            this.cart.push(item);
        }
        localStorage.setItem(cart,JSON.stringify(this.cart));
        this.itemAdded$.emit(item);

    }
    deleteItem(item:Item){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
        localStorage.setItem(cart,JSON.stringify(this.cart));
    }
    clearCart(){
        this.cart = [];
    }
    // applyDiscount(code:string){
    //     this.discount = discounts.filter(discount=>discount.code==code)[0];
    // }
    // getTotalPrice(){
    //     let totalPrice = this.cart.reduce((sum, cartItem)=>{
    //         return sum+=cartItem.price, sum;
    //     },0);
    //     if(this.discount){
    //         totalPrice -= totalPrice=this.discount.amount;
    //     }
    //     return totalPrice;
    // }

}