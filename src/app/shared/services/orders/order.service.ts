import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Config} from '../config'
import {BaseService} from "../BaseService.service";
import {Order} from './order'
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {CartService} from "../cartService/cart.service";

@Injectable()
export class OrderService extends BaseService {
    baseUrl:string=Config.orderServiceUrl;

    constructor(_http:Http,private cartService:CartService) {
        super(_http);
    }

    /*
    * @params cart
    * to pay the cart
    * */
    payCart(cart:any,customerInfo,currency='CNY') {
        console.log(customerInfo);
        let orderCart = {products:[],customerInformation:customerInfo,currency:currency};
        cart.forEach((item)=> {
            orderCart.products.push({id: item.id, quantity: item.quantity, type: item['type']})
        });

        return this._http.post(this.baseUrl + "/payCart",orderCart)
            .map(res=>res.json())
            .catch(this._handleErrors)
    }
    payOverseaProducts(customerInfo,currency){
       return this.payCart(this.cartService.overSeaProducts(),customerInfo,currency)
    }
    payNonOverseaProducts(customerInfo,currency){
       return this.payCart(this.cartService.nonOverSearProducts(),customerInfo,currency)
    }

    /*
     * @params status and page number
     * get orders by status
     * */
    getOrdersByStatus(status:string, page:number) {
        return this._http.get(this.baseUrl + "/" + status)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }


}