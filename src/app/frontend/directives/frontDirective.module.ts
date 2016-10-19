import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/index";
import {RevolutionSlider} from "./revolutionSlider.directive";
@NgModule({
    imports:[SharedModule],
    declarations:[RevolutionSlider],
    exports:[RevolutionSlider]
})
export class FrontDirectivesModule{

}