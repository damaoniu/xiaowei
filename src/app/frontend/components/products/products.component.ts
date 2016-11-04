import {Component, OnInit, ViewEncapsulation, OnChanges, AfterContentInit} from "@angular/core";
import {slideColumn, expanderList, collapseBlock, listingModeToggle, priceSlider} from "../../utils";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../shared/services/product/product.service";
import {CategoryService} from "../../../shared/services/category/category.service";
import {Subject} from "rxjs/Rx";
declare var jQuery:any;
declare  var _:any;
let $j = jQuery.noConflict();
@Component({
    selector: "products",
    templateUrl: "./products.html",
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class ProductsComponent implements OnInit,OnChanges,AfterContentInit {
    products:[any];
    categoryName:string;
    firstLevelCategory:boolean = false;
    currentSecondLevelCategories:[any];
    firstLevelCategories:[any];
    secondLevelCategories:{};
    currentCategory:Subject<any>;
    fetching:boolean=false;
    constructor(private route:ActivatedRoute, private productService:ProductService, private categoryService:CategoryService) {
        this.secondLevelCategories = {};
        this.currentCategory=new Subject<any>();
        this.currentCategory.subscribe(data=>{
            this.fetching=true
            this.productService.getProductByCategory(data['id'])
                .subscribe((data)=> {
                    this.products = data;
                    this.fetching=false;
                },(error)=>{
                    this.fetching=false;
                })
        })
    }

    productsNotEmpty() {

        return this.products && this.products.length > 0;
    }

    isCurrentFirst(firstCategoryId) {
        let result = false;
        let that = this;
        if(!_.isEmpty(this.secondLevelCategories) &&firstCategoryId){
            if(!this.secondLevelCategories[firstCategoryId])return;
            this.secondLevelCategories[firstCategoryId].forEach((c)=> {
                if (c.name == that.categoryName) result = true;
            });
        }
        return result;
    }

    isCurrentCategory(categoryName:string) {
        return categoryName == this.categoryName;
    }
    setNewCategory(sc){
        this.categoryName=sc.name;
        this.currentCategory.next(sc);
        this.products=null;
        $j("html, body").animate({ scrollTop: 0 }, "slow");

    }
    getCategories() {
        let that = this;
        this.categoryService.getFirstLevelCategories().subscribe(data=> {
            that.firstLevelCategories = data;
            if (data.length > 0) {
                data.map((category)=> {
                    that.categoryService.getSecondLevelCategory(category.name).subscribe(data=> {
                        that.secondLevelCategories[category.id] = data;
                    })
                })
            }
        })

    }

    ngOnChanges() {

    }

    ngAfterContentInit() {}

    ngOnInit() {
        //get the products
        let that = this;
        let segments = this.route.snapshot.url[1]['path'].split('#');
        this.categoryName = segments[1];
        // if (segments.length = 3) {
        //     this.firstLevelCategory = true;
        //     this.categoryService.getSecondLevelCategory(this.categoryName)
        //         .subscribe(data=> {
        //             this.currentSecondLevelCategories = data;
        //         })
        // }
        this.currentCategory.next({name:segments[1]})
        this.route.params.forEach((params:Params)=> {
            that.currentCategory.next({id:params['categoryId']})

        })

        this.getCategories();
        /*the ui parts*/
        slideColumn();
        expanderList();
        // collapseBlock();
        listingModeToggle();
        priceSlider();

    }
}