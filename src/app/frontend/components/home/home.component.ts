import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterContentInit} from "@angular/core";
import {CategoryService} from "../../../shared/services/category/category.service";

declare var jQuery:any;
declare var window:any;
let $j = jQuery.noConflict();
@Component({
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit,OnDestroy,AfterContentInit {
    firstLevelCategories:[any];

    constructor(private  categoryService:CategoryService) {}

    ngOnInit() {
        this.categoryService.getFirstLevelCategories().subscribe(data=> {
            this.firstLevelCategories =<[any]> data;
        })
    }

    ngAfterContentInit() {

    }

    ngOnDestroy() {
        // $j('body').removeClass('loaded');
    }

}