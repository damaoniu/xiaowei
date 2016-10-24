import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/sharedmodule";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
import {ProductModalComponent} from "./productModal/productModal.component";
@NgModule({
    imports:[SharedModule],
    declarations:[Cart,SlideToggle,AddToCart,ProductModalComponent],
    exports:[Cart,SlideToggle,AddToCart,ProductModalComponent]
})
export class PartsModule{

}