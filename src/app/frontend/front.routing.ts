import {Home} from "./components/home/home.component";
import { RouterModule} from "@angular/router";
import {FrontComponent} from "./front.component";
const routes =[
    {
        path:"",
        component:FrontComponent,
        children:[
            {
                path:"",
                component:Home
            }

        ]
    }
]

export const frontRoutes=RouterModule.forRoot(routes)




