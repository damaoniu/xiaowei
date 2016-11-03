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
    slickSlides:Subject<[any]>;

    constructor(private  categoryService:CategoryService) {
        this.secondLevelCategories={};
    }

    ngOnInit() {
        let that=this;
        this.revSliders= new Subject<[any]>();
        this.slickSlides= new Subject<[any]>();
        setTimeout(function () {
            let slides:[any] =[{
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
                }];
            that.revSliders.next(slides);
            that.slickSlides.next(slides);
        },1000);
        this.categoryService.getFirstLevelCategories().subscribe(data=> {
            that.firstLevelCategories = data;
            if(data.length>0){
                data.map((category)=>{
                    that.categoryService.getSecondLevelCategory(category.name).subscribe(data=>{
                       that.secondLevelCategories[category.id]=data;
                    })
                })
            }
        })
    }

    ngAfterContentInit() {}

    ngOnDestroy() {
        // $j('body').removeClass('loaded');
    }

}