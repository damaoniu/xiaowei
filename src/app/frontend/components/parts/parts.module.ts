import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.component";
import {SharedModule} from "../../../shared/index";
@NgModule({
    imports:[SharedModule],
    declarations:[Cart],
    exports:[Cart]
})
export class PartsModule{

}