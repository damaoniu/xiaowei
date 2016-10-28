import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/sharedmodule";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
import {RevSliderComponent} from "./revSlider/revSlider.component";
@NgModule({
    imports:[SharedModule],
    declarations:[Cart,SlideToggle,AddToCart,RevSliderComponent],
    exports:[Cart,SlideToggle,AddToCart,RevSliderComponent]
})
export class PartsModule{

}