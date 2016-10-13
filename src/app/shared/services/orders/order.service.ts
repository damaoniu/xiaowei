
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Config} from '../config'
import {BaseService} from "../BaseService.service";
import {Order} from './order'
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class OrderService extends BaseService{
    baseUrl:string
    constructor( _http:Http){
        super(_http);
        this.baseUrl=Config.webServiceUrl+"/orders";
    }
    saveOrder(order:Order){
      return this._http.post(this.baseUrl+"/"+order.id,order,this._headers)
          .map(res=>res.json())
          .catch(this._handleErrors)
    }
    newOrder(){
        return this._http.post(this.baseUrl+"/new",this._headers)
           .map(res=>res.json())
            .catch(this._handleErrors);
    }
    getOrdersByStatus(status:string,page:number){
        return this._http.get(this.baseUrl+"/"+status)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }



}