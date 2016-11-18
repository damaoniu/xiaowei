import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector:'search',
    templateUrl:'./search.html'
})
export class SearchComponent{
    constructor(private route:ActivatedRoute){}

}