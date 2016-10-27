import {Injectable} from "@angular/core";
import {BaseService} from "../BaseService.service";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Config} from "../config";


@Injectable()
export class CategoryService extends BaseService{
    constructor(http:Http){
        super(http);
    }
    getFirstLevelCategories(){
        console.log(Config.categoryServiceUrl+"/firstLevelCategories");
        return this._http.get(Config.categoryServiceUrl+"/firstLevelCategories",this._headers).map(res=>res.json())
            .map(this.prepareCategories)
            .catch(this._handleErrors);
    }
    getSecondLevelCategory(firstLevelId:string){
        return this._http.get(Config.categoryServiceUrl+"/secondLevelCategories",this._headers)
            .map(this.prepareCategories)
            .catch(this._handleErrors);
    }
    prepareCategories(res:Response){
        let data=res.json();
        console.log(data);
        let categoryList = [];
        data['categories'].forEach((category)=>{
            categoryList.push(category);
        })
        return categoryList;
    }
}