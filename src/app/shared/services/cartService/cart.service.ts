import {Injectable, NgZone} from "@angular/core";
import {Item} from "./item";
import {EventEmitter} from "@angular/forms/src/facade/async";
import {Discount} from "./discount";
//this is the better way to use no typescript libraries
declare var _:any;
declare var localStorage:any;
let cart="cart";
@Injectable()
export class CartService{
    public cart:Item[]=[];
    public itemAdded$:EventEmitter<Item>;
    public itemDeleted$:EventEmitter<Item>;
    public discount:Discount;
    constructor(public _ngzone:NgZone){
        this.itemAdded$=new EventEmitter<any>();
        this.itemDeleted$=new EventEmitter<any>();
        if(localStorage.getItem(cart)){
            this.cart=JSON.parse(localStorage.getItem(cart));
        }else {
            this.cart=[{id:"4",name:"test",quantity:12,price:23,description:"very good stuff",img_src:"adsdf",discount:{rate:10,startTime:"23",endTime:'3',productId:"100"}}]
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
    getSubTotal(item:Item){
        let subTotal= item.discount?item.quantity*item.price*(100-item.discount.rate)/100:item.quantity*item.price;
        return subTotal
    }
    getTotalPrice(){
        let totalPrice = this.cart.reduce((sum, cartItem)=>{
                return sum+=this.getSubTotal(cartItem), sum;
        },0);
        return totalPrice.toFixed(2);
    }

}