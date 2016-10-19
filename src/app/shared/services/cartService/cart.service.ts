import {Injectable} from "@angular/core";
import {Item} from "./item";
//this is the better way to use no typescript
declare var _:any;
@Injectable()
export class CartService{
    public cart:Item[]=[{id:"4",name:"test",price:23,description:"very good stuff",img_src:"adsdf"}];
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
    }
    deleteItem(item:Item){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
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