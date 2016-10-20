import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/index";
import {RevolutionSlider} from "./revolutionSlider.directive";
import {SlickDirective} from "./slick.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[RevolutionSlider,SlickDirective],
    exports:[RevolutionSlider,SlickDirective]
})
export class FrontDirectivesModule{

}