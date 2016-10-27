import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Product} from "./product";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
@Injectable()
export class ProductService {
    baseUrl:string;
    getProductUrl:string="pms-product-service/products/";
    constructor(private _http:Http,private _headers:Headers) {
        this.baseUrl=Config.productServiceUrl+"/pms-product-service/"
        this._headers.append("Content-Type", "application/json");
        this._headers.append('token',Config.token);

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
            .catch(this.handleErrors);

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
        .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}