import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/sharedmodule";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
import {RevSliderComponent} from "./revSlider/revSlider.component";
import {SlickSliderComponent, SlickO1, SlickO3, SlickO2, SlickO4} from "./slick/slick.component";
import {FrontDirectivesModule} from "../../directives/frontDirective.module";
import {LoginPopDirective, LoginModal} from "./auth/login.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
    imports:[SharedModule,FrontDirectivesModule,NgbModule],
    declarations:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginPopDirective,LoginModal
    ],
    exports:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginPopDirective,LoginModal
    ],
    entryComponents:[LoginModal]
})
export class PartsModule{}