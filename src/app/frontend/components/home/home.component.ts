import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterContentInit} from "@angular/core";
import {CategoryService} from "../../../shared/services/category/category.service";
import {Subject} from "rxjs/Rx";

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
    secondLevelCategories:{};
    revSliders:Subject<[any]>;

    constructor(private  categoryService:CategoryService) {}

    ngOnInit() {
        let that=this;
        this.revSliders= new Subject<[any]>();
        setTimeout(function () {
            that.revSliders.next([{
                img_url:"/assets/images/slides/02/slide-1.jpg" ,
                firstTitle:"first",
                secondTitle:"dd",
                thirdTitle:'mma',
            },
            {
                img_url:"/assets/images/slides/02/slide-2.jpg" ,
                firstTitle:"second",
                secondTitle:"dd",
                thirdTitle:'mma',
            },
            {
                img_url:"/assets/images/slides/02/slide-3.jpg" ,
                firstTitle:"third",
                secondTitle:"dd",
                thirdTitle:'mma',
            }]);
        },1000)
        this.categoryService.getFirstLevelCategories().subscribe(data=> {
            this.firstLevelCategories =<[any]> data;
            if(data.length>0){
                data.map((category)=>{
                    this.categoryService.getSecondLevelCategory(category.id).subscribe(data=>{
                       this.secondLevelCategories[category.id]=data;
                    })
                })
            }
        })
    }

    ngAfterContentInit() {

    }

    ngOnDestroy() {
        // $j('body').removeClass('loaded');
    }

}