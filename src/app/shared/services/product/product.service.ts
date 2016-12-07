import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Product} from "./product";
import {Config} from "../config";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {BaseService} from "../BaseService.service";
import {AuthenticationService} from "../authentication.service";
declare var _:any;
@Injectable()
export class ProductService extends BaseService {
    baseUrl:string = Config.productServiceUrl;

    constructor(http:Http, private authService:AuthenticationService) {
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
            .map(products=>this.transformProducts(products))
            .catch(this._handleErrors);
    }

    getComboByCategory(categoryId:string) {
        return this._http.get(this.baseUrl + "/combosByCategory/" + categoryId)
            .map(res=>res.json())
            .map(res=>res['combos'])
            .map(products=>this.transformProducts(products))
            .catch(this._handleErrors);
    }
    transformProducts(products){
        let newProducts = [];
        products.map(product=> {
            this.setPrice(product);
            console.log(product);
            newProducts.push(_.omit(product, "availabilities"))
        });
        return newProducts;
    }

    setPrice(product) {
        product['price'] = product.unit ? product.unit.levelThreePrice : product.levelThreePrice;
        if(this.authService.currentUser.role=="ROLE_SALES_VIP"){
            product['priceV'] = product.unit ? product.unit.levelOnePrice : product.levelOnePrice;
        }
        if (product.sale) {
            product.priceSale = +(product.price * (100 -product.sale.rate) / 100).toFixed(2)
            if(this.authService.currentUser.role=="ROLE_SALES_VIP") {
                product.priceSaleV = +(product.priceV * (100 - product.sale.rate) / 100).toFixed(2)
            }
        }
    }
}