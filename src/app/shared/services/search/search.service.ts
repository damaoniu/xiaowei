import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Config} from '../config'
import {BaseService} from "../BaseService.service";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map"

@Injectable()
export  class SearchService extends BaseService{
    baseUrl:string;
    constructor( _http:Http){
        super(_http);
        this.baseUrl=Config.webServiceUrl+"search/";
    }
    searchMain(searchText:string){
       return this._http.post(Config.webServiceUrl,{searchText:searchText},this._headers)
            .map(response=>response.json())
            .catch(this._handleErrors)
    }
}