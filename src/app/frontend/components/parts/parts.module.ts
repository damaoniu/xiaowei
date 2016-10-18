import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/index";
import {SlideToggle} from "./toggleSlide/toggleSlide.component";
@NgModule({
    imports:[SharedModule],
    declarations:[Cart,SlideToggle],
    exports:[Cart,SlideToggle]
})
export class PartsModule{

}