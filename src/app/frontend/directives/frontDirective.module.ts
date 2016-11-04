import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/sharedmodule";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
import {MagnificPopUp} from "./magnificPopup.directive";
import {ProductModalDirective} from "./productModal.directive";
import {DynamicHtmlOutlet} from "./dynamicHtmlOutlet.directive";
import {ToggleDirective} from "./toggle.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[
        RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet,
        ToggleDirective
    ],
    exports:[
        RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet,
        ToggleDirective
    ]
})
export class FrontDirectivesModule{

}