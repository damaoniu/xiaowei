import {NgModule} from "@angular/core";
import {accountRoutes} from "./accunt.routing";
import {SharedModule} from "../shared/sharedmodule";
import {AccountComponent} from "./account.component";
@NgModule({
    imports:[accountRoutes,SharedModule],
    declarations:[AccountComponent],
    exports:[AccountComponent]
})
export default class AccountModule{

}