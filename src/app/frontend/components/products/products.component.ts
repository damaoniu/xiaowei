import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {slideColumn, expanderList, collapseBlock, listingModeToggle, priceSlider} from "../../utils";

declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"products",
    templateUrl:"./products.html",
    encapsulation:ViewEncapsulation.None
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