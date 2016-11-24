import { Injectable } from "@angular/core";

import {Http} from "@angular/http";
import {BaseService} from "./BaseService.service";
import {Config} from "./config";
import {Cookie} from "ng2-cookies/ng2-cookies";

const tokenKey = "token"
import {Observable} from "rxjs/Rx";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {User} from "./user/user";

const userLit ="user";
declare var localStorage:any;
@Injectable()
export class AuthenticationService extends BaseService{
    baseUrl:string=Config.authenticationServiceUrl;
    constructor(_http:Http ){
        super(_http);
    }
    get isLoggedIn(): boolean {
        return true;
        // return !!getString(tokenKey);
    }

    get token(): string {
        return Cookie.get(tokenKey);
    }
    set token(theToken: string) {
        Cookie.set(tokenKey, theToken);
    }

    get user():User{
        return <User>JSON.parse(localStorage.getItem(userLit));
    }
    set user(user:User){
        localStorage.setItem(userLit,JSON.stringify(user));

    }


    register(user: User) {
        return this._http.post(this.baseUrl+"/register",user,this._headers)
            .map(res=>{
                //save current user to local reference
                return res.json()
            })
            .catch(this._handleErrors);

    }

    login(user: User) {
        let that =this;
        return this._http.get(this.baseUrl+"/authenticate?email="+user.email+"&password="+user.password,this._headers)
            .map(res=>res.json())
            .map(res=> {
                if(res['user']){
                    that.user=res['user']
                    return res['user'];
                }

            })
            .catch(this._handleErrors);
    }

    logoff() {
        let that = this;
        return this._http.post(this.baseUrl+"/logout",this._headers)
            .map((res)=>{
                that.token="";
                //save current user to local reference
               return res.json()
            })
            .catch(this.handleErrors)
    }

    resetPassword(email) {

        return this._http.post(this.baseUrl+"/reset-pass",{email:email},this._headers)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}