import {Component, OnInit} from "@angular/core";

declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"products",
    templateUrl:"./products.html"
})
export class ProductsComponent implements OnInit{
    ngOnInit() {
    }

}