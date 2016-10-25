import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/sharedmodule";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
import {MagnificPopUp} from "./magnificPopup.directive";
import {ProductModalDirective} from "./productModal.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective],
    exports:[RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective]
})
export class FrontDirectivesModule{

}