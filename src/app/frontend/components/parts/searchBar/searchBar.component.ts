import {Component, OnInit, Input} from "@angular/core";
import {Router} from "@angular/router";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"searchBar",
    templateUrl:'./search.html'
})
export class SearchBarComponent implements OnInit{
    @Input() noMobile:boolean;
    constructor(private router:Router){}
    searchKeyup(e,searchKey){
        console.log(e);
        if(e.keyCode==13){
            this.search(searchKey);
        }
    }
    search(searchKey){
        if(searchKey=="")return;
        this.router.navigate(['search',searchKey.trim()])
    }
    ngOnInit():void {
        //search dropdwon
        $j('.search__open').on('click', function(e) {
            e.preventDefault();
            $j(this).parent('.search').addClass('open');
            $j(this).next('#search-dropdown, .search-dropdown').addClass('open');
            $j('header .badge').addClass('badge--hidden');
        });
        $j('.search__close').on('click', function(e) {
            e.preventDefault();
            $j(this).closest('.search').removeClass('open');
            $j(this).closest('#search-dropdown, .search-dropdown').removeClass('open');
            $j('header .badge').removeClass('badge--hidden');
        });
    }

}