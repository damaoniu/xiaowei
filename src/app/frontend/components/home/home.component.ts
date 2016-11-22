import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterContentInit, OnChanges} from "@angular/core";
import {CategoryService} from "../../../shared/services/category/category.service";
import {Subject} from "rxjs/Rx";
import {ProductSetService} from "../../../shared/services/productSet/productSet.service";

declare var jQuery:any;
declare var window:any;
let $j = jQuery.noConflict();
@Component({
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit,OnDestroy,AfterContentInit,OnChanges {
    firstLevelCategories:[any];
    secondLevelCategories:{};
    revSliders:Subject<[any]>;
    newProducts:Subject<[any]>;
    saleProducts:Subject<[any]>;
    hotSalesProducts:Subject<[any]>;
    regularProducts:Subject<[any]>;

    constructor(private  categoryService:CategoryService, private productSetService:ProductSetService) {
        this.secondLevelCategories={};
    }
    ngOnChanges(){}

    ngOnInit() {
        this.getCategories();
        this.getSliders();
        this.productSetService.getProductSets()
            .subscribe(data=>{
                this.newProducts.next(data['NEW']);
                this.revSliders.next(data['SLIDER']);
                this.saleProducts.next(data['SALE']);
                this.hotSalesProducts.next(data['HOT_SALES']);
                this.regularProducts.next(data['REGULAR'])
            });

    }

    ngAfterContentInit() {}

    ngOnDestroy() {
        // $j('body').removeClass('loaded');
    }

    getSliders(){
        let that=this;
        this.revSliders= new Subject<[any]>();
        this.newProducts= new Subject<[any]>();
        this.hotSalesProducts= new Subject<[any]>();
        this.regularProducts= new Subject<[any]>();
        this.saleProducts= new Subject<[any]>();
    }
    getCategories(){
        let that=this;
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

}