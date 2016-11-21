import {Injectable} from "@angular/core";
import {BaseService} from "../BaseService.service";
import {Http} from "@angular/http";
@Injectable()
export class ProductSetService extends BaseService{
    constructor(http:Http){
        super(http)
    }
}