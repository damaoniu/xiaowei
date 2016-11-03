import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Product} from "./product";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {BaseService} from "../BaseService.service";
@Injectable()
export class ProductService extends BaseService{
    baseUrl:string=Config.productServiceUrl;
    getProductUrl:string="pms-product-service/products/";
    constructor(http:Http){
        super(http);
    }
    /*
    * @get all products
    * @params none
    * */
    getAll(){
        return this._http.get(this.baseUrl+"/products",this._headers)
            .map(res=>res.json())
            .map(data=>{
                let productList = [];
                data.products.forEach((product)=>{
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
    getProduct(id:string){
        return this._http.get(this.baseUrl+'/products/'+id)
            .map(res=>res.json())
        .map(data=>{
            return new Product(data.product)
        })
        .catch(this._handleErrors);
    }
    getProductByCategory(categoryId:string){
        return this._http.get(this.baseUrl+"/productsByCategory/"+categoryId)
            .map(res=>res.json())
            .map(res=>res.products)
            .catch(this._handleErrors);
    }
}