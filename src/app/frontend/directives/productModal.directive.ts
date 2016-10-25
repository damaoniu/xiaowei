import {HostListener, Input, Directive} from "@angular/core";
import {UtilsService} from "../../shared/services/utils.services";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Directive({
    selector:"[productModal]",
})
export class ProductModalDirective{
    @Input('product') product:any;
    constructor(private utils:UtilsService){}
    @HostListener('click') onClick(){
        this.utils.setQuickViewProduct({name:"ooo"})
       $j('#quickViewModal').modal('show');
    }

}