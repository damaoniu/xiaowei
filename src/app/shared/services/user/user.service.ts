import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {BaseService} from "../BaseService.service";
import {AuthenticationService} from "../authentication.service";
/*
* @UserService
* this service is used for retrieving and updating currentUser resources
* for registration, login, password resetting, current currentUser please refer to authentication service
* @author Joe Zhou 2016-11-1
* */

@Injectable()
export class UserService extends BaseService {
    private _currentUser:User;
    baseUrl:string=Config.userServiceUrl;
    constructor(_http:Http, private authService:AuthenticationService) {
        super(_http);
        this._currentUser=authService.currentUser;
    }

    /*
    *@method get users
     * @param
    * */
    getUsers(){
        return this._http.get(this.baseUrl+"/users")
            .map(res=>res.json())
            .catch(this._handleErrors);
    }

    /*
    * @method getUserByEmail
    * @param email
    * */
    getUserByEmail(email:String){
        return this._http.get("/user/"+email)
            .map(res=>res.json())
            .catch(this._handleErrors);
    }
}