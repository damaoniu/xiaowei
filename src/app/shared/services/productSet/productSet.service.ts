import {Injectable} from "@angular/core";
import {BaseService} from "../BaseService.service";
import {Http} from "@angular/http";
import {Config} from "../config";

@Injectable()
export class ProductSetService extends BaseService{
    baseUrl:string=Config.productSetServiceUrl;
    constructor(_http:Http){
        super(_http);
    }
    getProductSets(){
        return this._http.get(this.baseUrl+'/productSets')
            .map(res=>res.json())
            .map(res=>res['productSet'])
            .catch(this._handleErrors);
    }
    getSubContent(parentId:string){
        return this._http.get(this.baseUrl+"/subContent/"+parentId)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }
}