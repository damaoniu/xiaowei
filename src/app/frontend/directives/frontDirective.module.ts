import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/sharedmodule";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
import {MagnificPopUp} from "./magnificPopup.directive";
import {ProductModalDirective} from "./productModal.directive";
import {DynamicHtmlOutlet} from "./dynamicHtmlOutlet.directive";
import {ToggleDirective} from "./toggle.directive";
import {NoAttachmentValidator} from "./noAttachment.directive";
import {EqualValidator} from "./validateEqual.directive";
import {EmailInSystem} from "./validations/emailInSystem";
import {CountDown} from "./countdown.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[
        RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet,
        ToggleDirective,CountDown,
        EmailInSystem, NoAttachmentValidator,EqualValidator
    ],
    exports:[
        RevolutionSlider,SlickDirective,MagnificPopUp,ProductModalDirective,DynamicHtmlOutlet,
        ToggleDirective,CountDown,
        EmailInSystem, NoAttachmentValidator,EqualValidator
    ]
})
export class FrontDirectivesModule{

}