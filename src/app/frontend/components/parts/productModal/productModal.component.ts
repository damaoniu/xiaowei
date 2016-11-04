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
    get price(){
        if(this.quickViewProduct){
            if(this.quickViewProduct['unit']){
                if(this.quickViewProduct['sale']){
                    return this.quickViewProduct['unit']['levelThreePrice']*(100-this.quickViewProduct['sale']['rate'])/100;
                }else{
                    return this.quickViewProduct['unit']['levelThreePrice']
                }
            }else{
                return 0;
            }
        }
    }
}