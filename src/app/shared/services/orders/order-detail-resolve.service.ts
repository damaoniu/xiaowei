import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Order} from "./order";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderDetailResolve implements Resolve<Order>{
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>|Promise<any>|any {
        return undefined;
    }

}