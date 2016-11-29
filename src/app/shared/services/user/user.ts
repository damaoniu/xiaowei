import * as validator from 'email-validator';
import {Account} from "./account";
export class User {
    email:string;
    createdTime:string;
    creator:User;
    firstUpgradeVipDate:string;
    id:number;
    openId:number;
    role:string;
    status:string;
    username:string;
    vipExpirateDate:string;
    root:User;
    account:Account;

    isValidEmail() {
        return validator.validate(this.email);
    }
}