import {Injectable} from "@angular/core";
import {BaseService} from "../BaseService.service";
import {Http} from "@angular/http";
import {Config} from "protractor/built/index";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class CategoryService extends BaseService{
    constructor(http:Http){
        super(http);
    }
    getFirstLevel(){
        return this._http.get(Config.categoryServiceUrl+"/firstLevelCategories").map(res=>res.json())
            .map(res=>res['categories'])
            .catch(this._handleErrors);
    }
    getSecondLevelCategory(firstLevelId:string){
        return this._http.get(Config.categorServiceUrl+"/secondLevelCategories")
            .map(res=>res.json())
            .map(res=>res['categories'])
            .catch(this._handleErrors);
    }
}