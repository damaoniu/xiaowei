import {Component, ElementRef, ViewChild, Input, ViewEncapsulation} from "@angular/core";
import {UtilsService} from "../../../../shared/services/utils.services";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"productModal",
    templateUrl:"./productModal.html",
    encapsulation:ViewEncapsulation.None
})
export class ProductModalComponent{
    @ViewChild('modal')modalTemplate:ElementRef;
    @Input('product') product:any;
    constructor(private utils:UtilsService){}
    openModal(){
        this.utils.setQuickViewProduct({name:"ooo"})
       $j('#quickViewModal').modal('show');
    }

}