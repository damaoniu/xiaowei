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
import {CartButtonComponent} from "./cart/cartButton.component";
import {FileInputComponent} from "./fileInput/fileinput.component";
import {SearchBarComponent} from "./searchBar/searchBar.component";
@NgModule({
    imports:[SharedModule,FrontDirectivesModule],
    declarations:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginComponent,ProductModalComponent,CartButtonComponent,FileInputComponent,
        SearchBarComponent


    ],
    exports:[
        Cart,SlideToggle,AddToCart,RevSliderComponent,SlickSliderComponent,
        SlickO1,SlickO2,SlickO3,SlickO4,LoginComponent,ProductModalComponent,CartButtonComponent,FileInputComponent,
        SearchBarComponent
    ],
    entryComponents:[]
})
export class PartsModule{}