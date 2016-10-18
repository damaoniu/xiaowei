import {Injectable} from "@angular/core";
@Injectable()
export class CartService{
    public cart:Object={number:4};
    setCart(value){
        this.cart=value;
    }
    getCart(){
        return this.cart
    }

}