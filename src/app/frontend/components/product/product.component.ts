import {Component, OnInit} from "@angular/core";
import {thumbnailsCarousel, elevateZoom, inputCounter} from "../../utils";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../shared/services/product/product.service";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"product",
    templateUrl:"./product.html"
})
export class ProductComponent implements OnInit{
    private product:any;
    constructor(private route:ActivatedRoute,private productService:ProductService){}
    ngOnInit() {
        // Init All Carousel
        elevateZoom();
        this.route.params.forEach((params:Params)=>{
            this.productService.getProduct(params['productId']).subscribe(data=>{
               this.product=data;
            });
        })

    }

}