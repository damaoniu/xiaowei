import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {BaseService} from "../BaseService.service";
@Injectable()
export class UserService extends BaseService {
    private _user:User;

    constructor(_http:Http) {
        super(_http);
    }

    get user() {
        return this._user;
    }

    set user(newUser:User) {
        this._user = newUser;
    }

    register(user:User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post(
            Config.userServiceUrl + "/save",
            JSON.stringify({
                Username: user.email,
                Email: user.email,
                Password: user.password
            }),
            {headers: headers}
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

    handleErrors(error:Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}