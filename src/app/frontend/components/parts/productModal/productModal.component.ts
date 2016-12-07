import {Component} from "@angular/core";
import {UtilsService} from "../../../../shared/services/utils.services";
@Component({
    selector:'product-modal',
    templateUrl:'./productModal.html'
})
export class ProductModalComponent{
    constructor(private utils:UtilsService){}
    get quickViewProduct(){
        return this.utils.getQuickViewProduct();
    }
}