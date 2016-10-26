import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
const routes=[
    {
        path:"",
        component:AccountComponent

    }
]
export const accountRoutes = RouterModule.forChild(routes);