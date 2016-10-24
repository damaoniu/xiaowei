import {Injectable} from "@angular/core";
@Injectable()
export class UtilsService{
    private quickViewProduct:Object={name:"aa"};
    getQuickViewProduct(){
        return this.quickViewProduct;
    }
    setQuickViewProduct(product){
        this.quickViewProduct=product;
    }

}