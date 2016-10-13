import {Http, Headers, Response} from "@angular/http";
import {Config} from "./config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map"

export class BaseService {
    _headers:Headers
    constructor(public _http:Http ){
        this._headers=new Headers();
        this._headers.append("Content-Type", "application/json");
        this._headers.append('token',Config.token);
    }
    _handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}