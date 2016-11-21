import {Injectable} from "@angular/core";
import {BaseService} from "./BaseService.service";
import {Http} from "@angular/http";
import {Config} from "./config";
@Injectable()
export class SearchService extends BaseService{
    baseUrl:string=Config.searchServiceUrl;
    constructor(http:Http){
        super(http);
    }
    search(queryString:string){
       return this._http.get(this.baseUrl+"/"+queryString)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }
}