import {Component, OnInit, ViewEncapsulation, OnChanges} from "@angular/core";
import {slideColumn, expanderList, collapseBlock, listingModeToggle, priceSlider} from "../../utils";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../shared/services/product/product.service";
import {CategoryService} from "../../../shared/services/category/category.service";

declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"products",
    templateUrl:"./products.html",
    encapsulation:ViewEncapsulation.None,
    providers:[]
})
export class ProductsComponent implements OnInit,OnChanges{
    products:[any];
    categoryName:string;
    firstLevelCategory:boolean;
    secondLevelCategories:[any];
    constructor(private route:ActivatedRoute, private productService:ProductService,private categoryService:CategoryService){}

    productsNotEmpty(){

        return this.products &&this.products.length>0;
    }
    ngOnChanges() {

    }
    ngOnInit(){
        //get the products
        let that=this;
        let segments=this.route.snapshot.url[1]['path'].split('#');
        this.categoryName=segments[1];
        if(segments.length=3){
            this.firstLevelCategory=true;
            this.categoryService.getSecondLevelCategory(this.categoryName)
                .subscribe(data=>{
                    this.secondLevelCategories=data;
                })
        }
        this.route.params.forEach((params:Params)=>{
            that.productService.getProductByCategory(params['categoryId'])
                .subscribe(data=>{
                    that.products=data;
                })

        })
        /*the ui parts*/
        slideColumn();
        expanderList();
        collapseBlock();
        listingModeToggle();
        priceSlider();

    }
}