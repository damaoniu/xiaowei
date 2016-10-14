import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/index";
import {Home} from "./components/home/home.component";
import {FrontComponent} from "./front.component";
import {frontRoutes} from "./front.routing";
@NgModule({
    imports: [SharedModule,frontRoutes],
    declarations:[FrontComponent,Home],
    exports:[FrontComponent,Home]
})
export class Front{

}