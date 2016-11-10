import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/sharedmodule";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
import {AddToCart} from "./addToCart/addToCart.component";
import {RevSliderComponent} from "./revSlider/revSlider.component";
import {SlickSliderComponent, SlickO1, SlickO3, SlickO2, SlickO4} from "./slick/slick.component";
import {FrontDirectivesModule} from "../../directives/frontDirective.module";
import { LoginComponent} from "./auth/login.component";
import {ProductModalComponent} from "./productModal/productModal.component";
import {ImgUrlPipe} from "../../../shared/pipes/imgUrl.pipe";
import {CartButtonComponent} from "./cart/cartButton.component";
@NgModule({
    imports:[SharedModule,FrontDirectivesModule],
    declarations:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginComponent,ProductModalComponent,CartButtonComponent


    ],
    exports:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginComponent,ProductModalComponent,CartButtonComponent
    ],
    entryComponents:[]
})
export class PartsModule{}