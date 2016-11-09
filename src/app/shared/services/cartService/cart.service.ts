import {Injectable, NgZone} from "@angular/core";
import {Item} from "./item";
import {EventEmitter} from "@angular/forms/src/facade/async";
import {Discount} from "./discount";
import {BaseService} from "../BaseService.service";
import {Http} from "@angular/http";
//this is the better way to use no typescript libraries
declare var _:any;
declare var localStorage:any;
let cart = "cart";
@Injectable()
export class CartService extends BaseService{
    public cart:Item[] = [];
    public itemAdded$:EventEmitter<Item>;
    public itemDeleted$:EventEmitter<Item>;
    public discount:Discount;

    constructor(http:Http,public _ngzone:NgZone) {
        super(http);
        this.itemAdded$ = new EventEmitter<any>();
        this.itemDeleted$ = new EventEmitter<any>();
        if (localStorage.getItem(cart)) {
            this.cart = JSON.parse(localStorage.getItem(cart));
        }
    }

    setCart(value) {
        this.cart = value;
    }

    getCart() {
        return this.cart
    }

    getItemsCount():number {
        let count=0;
        this.cart.forEach((item)=>count+=item.quantity);
        return count;
    }

    addItem(item:Item, quantity:number) {
        quantity = quantity || 1;
        let currentItem = _.findWhere(this.cart, {id: item.id});
        if (currentItem && currentItem != undefined) {
            //increase the number of the existing product
            currentItem.quantity += +quantity;
        } else if(quantity>0) {

            this.cart.push({id: item.id, product: item, quantity: quantity});
        }
        if(currentItem &&currentItem.quantity<=0){
            this.deleteItem(currentItem);
        }else{
            localStorage.setItem(cart, JSON.stringify(this.cart));
            this.itemAdded$.emit(item);
        }

    }


    deleteItem(item:Item) {
        this.cart = this.cart.filter(cartItem=>cartItem.id !== item.id);
        localStorage.setItem(cart, JSON.stringify(this.cart));
    }

    clearCart() {
        this.cart = [];
    }
    getItem(id){
        return _.findWhere(this.cart, {id: id})
    }

    getSubTotal(item:Item) {
        if (item.quantity && item.product && item.product.price) {
            let subTotal = item.product.sale ? item.quantity * item.product.price * (100 - item.product.sale.rate) / 100 : item.quantity * item.product.price;
            return subTotal
        } else {
            return 0
        }
    }

    getTotalPrice() {
        let totalPrice = this.cart.reduce((sum, cartItem)=> {
            return sum += this.getSubTotal(cartItem), sum;
        }, 0);
        return totalPrice.toFixed(2);
    }


}