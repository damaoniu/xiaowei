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
    _handleErrors (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}