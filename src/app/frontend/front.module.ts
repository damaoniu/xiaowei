import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/index";
import {Home} from "./components/home/home.component";
@NgModule({
    imports: [SharedModule],
    declarations:[Home],
    exports:[Home]
})
export class Front{

}