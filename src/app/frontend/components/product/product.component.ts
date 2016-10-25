import {Component, OnInit} from "@angular/core";
import {thumbnailsCarousel, elevateZoom, inputCounter} from "../../utils";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"product",
    templateUrl:"./product.html"
})
export class ProductComponent implements OnInit{
    ngOnInit() {
        // Init All Carousel
        thumbnailsCarousel($j('.product-images-carousel ul'));
        inputCounter();
        elevateZoom();

    }

}