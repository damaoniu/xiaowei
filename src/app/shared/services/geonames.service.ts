import {Injectable} from "@angular/core";
import {BaseService} from "./BaseService.service";
import {Http} from "@angular/http";
import {Config} from "./config";
@Injectable()
export class GeoNamesService extends BaseService{
    baseUrl:string=Config.geoNamesServiceUrl;
    constructor(http:Http){
        super(http)
    }

    getCountries(){
        return this._http.get(this.baseUrl="/countries",this._headers)
            .map(data=>data['countries'])
            .catch(this._handleErrors);
    }


}