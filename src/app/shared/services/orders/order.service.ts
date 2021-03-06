import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Config} from '../config'
import {BaseService} from "../BaseService.service";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {CartService} from "../cartService/cart.service";
import {AuthenticationService} from "../authentication.service";

@Injectable()
export class OrderService extends BaseService {
    baseUrl:string = Config.orderServiceUrl;

    constructor(_http:Http, private cartService:CartService, private authService:AuthenticationService) {
        super(_http);
    }

    /*
     * @params _cart
     * to pay the _cart
     * */
    payCart(cart:any, customerInfo, currency = 'CNY') {
        let orderCart = {
            products: [],
            customerInformation: customerInfo,
            currency: currency,
            shippingRemark: customerInfo.shippingRemark,
            totalPrice: this.cartService.getPriceSum(cart),
            totalWeight: this.cartService.getWeightSum(cart),
            creatorId: this.authService.currentUser.id,
            creatorEmail:this.authService.currentUser.email
        };
        if (currency == "CAD") {
            orderCart['total_price_cad'] = this.cartService.getPriceSum(cart);
        }
        //send only the necessary information to the server
        cart.forEach((item)=> {
            orderCart.products.push({
                id: item.id,
                quantity: item.quantity,
                type: this.cartService.getProductType(item.product),
                storageCondition: item.product.storageCondition,
                thirdPartyId: item.product.thirdPartyId?item.product.thirdPartyId:0,
                weight:this.cartService.getProductWeight(item.product),
                categoryName:item.product.categoryName,
                packagingFee:this.cartService.getItemPackageingFee(item.product.storageCondition),
                xfzCost:this.cartService.getItemXfzCost(item)
            });
        });

        return this._http.post(this.baseUrl + "/payCart", orderCart)
            .map(res=>res.json())
            .catch(this._handleErrors)
    }

    payOverseaProducts(customerInfo) {

        return this.payCart(this.cartService.overSeaProducts(), customerInfo, this.getProductCurrency(this.cartService.overSeaProducts()[0]))
    }

    getProductCurrency(product) {
        if (!product) {
            return 'CNY';
        }
        if (product.products) {
            return product.products[0].product.unit.currency;
        } else {
            return product.product.unit.currency;
        }
    }

    payNonOverseaProducts(customerInfo) {

        return this.payCart(this.cartService.nonOverSearProducts(), customerInfo, this.getProductCurrency(this.cartService.nonOverSearProducts()[0]))
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