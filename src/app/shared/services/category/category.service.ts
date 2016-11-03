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
        return this._http.get(Config.categoryServiceUrl+"/firstLevelCategories")
            .map(this.prepareCategories)
            .catch(this._handleErrors);
    }
    getSecondLevelCategory(firstLevelName:string){
        return this._http.get(Config.categoryServiceUrl+"/secondLevelCategories/"+firstLevelName)
            .map(this.prepareCategories)
            .catch(this._handleErrors);
    }
    prepareCategories(res:Response){
        let data=res.json();
        let categoryList = [];
        data['categories'].forEach((category)=>{
            categoryList.push(category);
        })
        return categoryList;
    }
}