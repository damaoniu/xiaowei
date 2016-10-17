import {Home} from "./components/home/home.component";
import { RouterModule} from "@angular/router";
import {FrontComponent} from "./front.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
const routes =[
    {
        path:"",
        component:FrontComponent,
        children:[
            {
                path:"",
                component:Home
            },
            {
                path:"products",
                component:ProductsComponent
            },
            {
                path:"products/:productId",
                component:ProductComponent
            },
            {
                path:"checkout",
                component:CheckoutComponent
            }

        ]
    }
]

export const frontRoutes=RouterModule.forRoot(routes)




