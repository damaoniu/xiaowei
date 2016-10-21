import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
@Injectable()
export class UserService {
    public user:User;
    constructor(private _http:Http) {
    }
    getUser(){
        return this.user;
    }
    setUser(newUser:User){
        this.user=newUser;
    }
    register(user:User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post(
            Config.webServiceUrl + "Users",
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

    login(user:User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post(
            Config.webServiceUrl + "oauth/token",
            JSON.stringify({
                username: user.email,
                password: user.password,
                grant_type: "password"
            }),
            {headers: headers}
        )
            .map(response => response.json())
            .do(data => {
                Config.token = data.Result.access_token;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error:Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}