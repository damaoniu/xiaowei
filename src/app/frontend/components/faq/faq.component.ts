import {Component, ViewEncapsulation, OnInit} from "@angular/core";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"faq",
    templateUrl:"./faq.html",
    encapsulation:ViewEncapsulation.None
})
export class FaqComponent implements OnInit{
    ngOnInit():void {

    }

}