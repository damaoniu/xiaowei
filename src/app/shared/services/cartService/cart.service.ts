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
export class CartService extends BaseService {
    public _cart:Item[] = [];
    public itemAdded$:EventEmitter<Item>;
    public itemDeleted$:EventEmitter<Item>;
    public discount:Discount;

    constructor(http:Http, public _ngzone:NgZone) {
        super(http);
        this.itemAdded$ = new EventEmitter<any>();
        this.itemDeleted$ = new EventEmitter<any>();
        if (localStorage.getItem(cart)) {
            this._cart = JSON.parse(localStorage.getItem(cart));
        }
    }

    set cart(value) {
        this._cart = value;
    }

    get cart() {
        return this._cart
    }

    hasOversea():boolean {
        let has = false;
        this._cart.forEach((cartItem)=> {
            if (cartItem.product['products']) {
                if (cartItem.product.currency != 'CNY') {
                    has = true;
                }
            } else {
                if (cartItem.product.unit.currency != 'CNY') {
                    has = true;
                }
            }
        })
        return has
    }

    overSeaProducts() {
        let overSeaProducts = [];
        let that = this;
        this._cart.forEach(product=> {
            if (that.isOversea(product.product)) {
                overSeaProducts.push(product);
            }
        })
        return overSeaProducts;

    }
    getOverseaTotalPrice(){
        return this.getPriceSum(this.overSeaProducts());
    }
    getNonOverseaTotalPrice(){
        return this.getPriceSum(this.nonOverSearProducts());
    }
    getPriceSum(products) {
        let price = 0;
        let that = this;
        products.forEach((product)=> {
            price += that.getSubTotal(product);
        })
        return price;
    }

    nonOverSearProducts() {
        let nonVerSeaProducts = [];
        let that = this;
        this._cart.forEach(product=> {
            if (!that.isOversea(product.product)) {
                nonVerSeaProducts.push(product);
            }
        })
        return nonVerSeaProducts
    }

    isOversea(product) {
        return (product.unit && product.unit.currency != "CNY") || (product.products && product.products[0].product.unit.currency != 'CNY');
    }

    getItemsCount():number {
        let count = 0;
        this._cart.forEach((item)=>count += item.quantity);
        return count;
    }

    addItem(item:Item, quantity:number) {
        quantity = quantity || 1;
        let currentItem = _.findWhere(this._cart, {id: item.id});
        if (currentItem && currentItem != undefined) {
            //increase the number of the existing product
            currentItem.quantity += +quantity;
        } else if (quantity > 0) {

            this._cart.push({id: item.id, product: item, quantity: quantity});
        }
        if (currentItem && currentItem.quantity <= 0) {
            this.deleteItem(currentItem);
        } else {
            localStorage.setItem(cart, JSON.stringify(this._cart));
            this.itemAdded$.emit(item);
        }

    }


    deleteItem(item:Item) {
        this._cart = this._cart.filter(cartItem=>cartItem.id !== item.id);
        localStorage.setItem(cart, JSON.stringify(this._cart));
    }

    clearCart() {
        this._cart = [];
    }

    getItem(id) {
        return _.findWhere(this._cart, {id: id})
    }
    getWeightSum(products){
        let weight=0;
        let that=this;
        products.forEach(product=>{
            weight+= that.getSubWeight(product);
        })
        return weight;
    }
    getTotalWeight() {
        let weight = 0;
        this._cart.forEach((product)=> {
            weight+=this.getSubWeight(product)
        });
        return weight;
    }

    getSubWeight(item:Item) {
        let weight = 0;
         console.log(item)
        if (item.quantity && item.product) {
            if (item.product.products) {
                item.product.products.forEach((component)=> {
                    weight += item.quantity*component.quantity * component.product.unit.weightInKg;
                })
            } else {
                weight += item.quantity * item.product.unit.weightInKg;

            }
        }
        return weight;
    }

    getSubTotal(item:Item) {
        /*
         * when there is sale,
         * there price returned by the service will already have been discounted
         * */
        if (item.quantity && item.product) {
            let price = 0;
            if (item.product.products) {
                price = item.product.levelThreePrice;
            } else {
                price = item.product.unit.levelThreePrice
            }
            let subTotal = item.quantity * price;
            return subTotal
        } else {
            return 0
        }
    }

    getTotalPrice() {
        let totalPrice = this._cart.reduce((sum, cartItem)=> {
            return sum += this.getSubTotal(cartItem), sum;
        }, 0);
        return totalPrice.toFixed(2);
    }


}