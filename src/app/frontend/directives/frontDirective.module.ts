import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/index";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
import {MagnificPopUp} from "./magnificPopup.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[RevolutionSlider,SlickDirective,MagnificPopUp],
    exports:[RevolutionSlider,SlickDirective,MagnificPopUp]
})
export class FrontDirectivesModule{

}