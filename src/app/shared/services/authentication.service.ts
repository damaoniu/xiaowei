import { Injectable } from "@angular/core";

import {Http, Headers} from "@angular/http";
import {BaseService} from "./BaseService.service";
import {Config} from "./config";
import {Cookie} from "ng2-cookies/ng2-cookies";

const tokenKey = "token"
import {Observable} from "rxjs/Rx";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {User} from "./user/user";

const currenUser ="user";
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

    get currentUser():User{
        return <User>JSON.parse(localStorage.getItem(currenUser));
    }
    set currentUser(user:User){
        localStorage.setItem(currenUser,JSON.stringify(user));

    }

    login(user: any) {
        let that =this;
        return this._http.get(this.baseUrl+"/authenticate?email="+user.email+"&password="+user.password,this._headers)
            .map(res=>res.json())
            .map(res=> {
                console.log(res)
                if(res['user']){
                    that.currentUser=res['user']
                    return res['user'];
                }

            })
            .catch(this._handleErrors);
    }

    logOut() {
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
    register(user:any) {
        return this._http.post(
            Config.userServiceUrl + "/save",
            user,
        )
            .map(res=> {
                //persist certain data
                return res.json();
            })
            .catch(this.handleErrors);
    }


    forgotPass(email:string) {
        return this._http.post(Config.userServiceUrl + "/forgotPass",
            email,
            this._headers
        )
            .map(res=>res.json())
            .catch(this._handleErrors);
    }
    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}