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

const user ="user";
@Injectable()
export class LoginService extends BaseService{
    baseUrl:string
    constructor(_http:Http, ){
        super(_http);
        this.baseUrl=Config.webServiceUrl+"/auth"
    }
    get isLoggedIn(): boolean {
        return true;
        // return !!getString(tokenKey);
    }

    private get token(): string {
        return Cookie.get(tokenKey);
    }
    private set token(theToken: string) {
        Cookie.set(tokenKey, theToken);
    }

    private get user():any{
        return
    }
    private set user(user:User){

    }

    // constructor(private backend: BackendService) {
    //     if (this.token) {
    //         this.backend.el.authentication.setAuthorization(this.token, "bearer");
    //     }
    // }

    register(user: User) {
        return this._http.post(this.baseUrl+"/register",user,this._headers)
            .map(res=>{
                //save current user to local reference
                return res.json()
            })
            .catch(this._handleErrors);
        // return this.backend.el.Users.register(user.email, user.password)
        //     .catch(this.handleErrors);
    }

    login(user: User) {
        // return this.backend.el.authentication.login(user.email, user.password).then((data) => {
        //     this.token = data.result.access_token;
        //     this.backend.el.authentication.setAuthorization(this.token, "bearer");
        //     return Promise.resolve();
        // }).catch(this.handleErrors);
        return this._http.post(this.baseUrl+"/login",user,this._headers)
            .map(res=>{
                //save current user to local reference
                res.json()
            })
            .catch(this._handleErrors);
    }

    logoff() {
        let that = this;
        // this.backend.el.authentication.clearAuthorization();
        return this._http.post(this.baseUrl+"/logout",this._headers)
            .map((res)=>{
                that.token="";
                //save current user to local reference
               return res.json()
            })
            .catch(this.handleErrors)
    }

    resetPassword(email) {
        // return this.backend.el.Users.resetPassword({ Username: email })
        //     .catch(this.handleErrors);
        return this._http.post(this.baseUrl+"/reset-pass",{email:email},this._headers)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}