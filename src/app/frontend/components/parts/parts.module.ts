import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/sharedmodule";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
import {RevSliderComponent} from "./revSlider/revSlider.component";
import {SlickSliderComponent} from "./slick/slick.component";
import {FrontDirectivesModule} from "../../directives/frontDirective.module";
@NgModule({
    imports:[SharedModule,FrontDirectivesModule],
    declarations:[Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent],
    exports:[Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent]
})
export class PartsModule{}