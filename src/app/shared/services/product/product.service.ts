import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Product} from "./product";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {BaseService} from "../BaseService.service";
declare var _:any;
@Injectable()
export class ProductService extends BaseService {
    baseUrl:string = Config.productServiceUrl;
    constructor(http:Http) {
        super(http);
    }

    /*
     * @get all products
     * @params none
     * */
    getAll() {
        return this._http.get(this.baseUrl + "/products", this._headers)
            .map(res=>res.json())
            .map(data=> {
                let productList = [];
                data.products.forEach((product)=> {
                    productList.push(new Product(product));
                })
                return productList;
            })
            .catch(this._handleErrors);

    }

    /*
     * @getProduct
     * @params id
     * */
    getProduct(id:string) {
        return this._http.get(this.baseUrl + '/product/' + id)
            .map(res=>res.json())
            .map(data=>data.product)
            .catch(this._handleErrors);
    }
    getCombo(id:string) {
        return this._http.get(this.baseUrl + '/combo/' + id)
            .map(res=>res.json())
            .map(data=>data['combo'])
            .catch(this._handleErrors);
    }

    getProductByCategory(categoryId:string) {
        return this._http.get(this.baseUrl + "/productsByCategory/" + categoryId)
            .map(res=>res.json())
            .map(res=>res['products'])
            .map(res=>{
                let newProducts = [];
                res.forEach(product=>{
                    newProducts.push(_.omit(product,"availabilities"))
                })
                return newProducts;
            })
            .catch(this._handleErrors);
    }
    getComboByCategory(categoryId:string) {
        return this._http.get(this.baseUrl + "/combosByCategory/" + categoryId)
            .map(res=>res.json())
            .map(res=>res['combos'])
            .map(res=>{
                let newProducts = [];
                res.forEach(product=>{
                    newProducts.push(_.omit(product,"availabilities"))
                })
                return newProducts;
            })
            .catch(this._handleErrors);
    }
    getPrice(product){
        if(product){
            if(product['unit']){
                if(product['sale']){
                    return product['unit']['levelThreePrice']*(100-product['sale']['rate'])/100;
                }else{
                    return product['unit']['levelThreePrice']
                }
            }else{
                return 0;
            }
        }
    }
}