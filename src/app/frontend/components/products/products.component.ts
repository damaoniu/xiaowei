import {Component, OnInit} from "@angular/core";
import {slideColumn, expanderList, collapseBlock, listingModeToggle, priceSlider} from "../../utils";

declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"products",
    templateUrl:"./products.html"
})
export class ProductsComponent implements OnInit{
    ngOnInit() {
        slideColumn();
        expanderList();
        collapseBlock();
        listingModeToggle();
        priceSlider();
    }

}