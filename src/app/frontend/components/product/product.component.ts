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
        $j('.video-link').magnificPopup({
            disableOn: 767,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Init All Carousel

        thumbnailsCarousel($j('.product-images-carousel ul'));
        inputCounter();
        elevateZoom();

    }

}