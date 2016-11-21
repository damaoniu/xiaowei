import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../shared/services/search.service";
@Component({
    selector:'search',
    templateUrl:'./search.html'
})
export class SearchComponent implements OnInit{
    searchResult:any;
    constructor(private route:ActivatedRoute,private searchService:SearchService){}
    ngOnInit():void {
        this.route.params.subscribe(data=>{
            this.searchService.search(data['queryString'])
                .subscribe(data=>{
                    this.searchResult=data;
                })
        })
    }


}