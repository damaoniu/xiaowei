import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/sharedmodule";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
import {MagnificPopUp} from "./magnificPopup.directive";
import {ProductModalDirective} from "./productModal.directive";
import {DynamicHtmlOutlet} from "./dynamicHtmlOutlet.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet],
    exports:[RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet]
})
export class FrontDirectivesModule{

}