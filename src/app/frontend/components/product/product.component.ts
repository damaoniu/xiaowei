import {Component, OnInit} from "@angular/core";
import {thumbnailsCarousel, elevateZoom, inputCounter} from "../../utils";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../shared/services/product/product.service";
import {Subject} from "rxjs/Rx";
declare var jQuery:any;
let $j = jQuery.noConflict();
@Component({
    selector: "product",
    templateUrl: "./product.html"
})
export class ProductComponent implements OnInit {
    private product:any = {};
    relatedProducts:Subject<[any]>;

    constructor(private route:ActivatedRoute, private productService:ProductService) {
        this.relatedProducts = new Subject<[any]>();
    }

    ngOnInit() {
        let that =this;
        // Init All Carousel
        elevateZoom();

        this.route.params.forEach((params:Params)=> {
            let parts =  params['productId'].split('c');
            if(parts.length>1){
                this.productService.getCombo(parts[0]).subscribe(data=> {
                    this.product = data;
                    this.productService.getComboByCategory(data['categoryId'])
                        .map(data=>{return data.filter((product)=>{ return product.id!=that.product.id})})
                        .subscribe(data=> {
                            that.relatedProducts.next(data);
                        })
                });
            }else{

                this.productService.getProduct(parts[0]).subscribe(data=> {
                    this.product = data;
                    this.productService.getProductByCategory(data['categoryId'])
                        .map(data=>{return data.filter((product)=>{ return product.id!=that.product.id})})
                        .subscribe(data=> {
                            that.relatedProducts.next(data);
                        })
                });
            }
        })

    }

}