import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/index";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
@NgModule({
    imports:[SharedModule],
    declarations:[Cart,SlideToggle,AddToCart],
    exports:[Cart,SlideToggle,AddToCart]
})
export class PartsModule{

}