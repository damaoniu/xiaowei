import {Home} from "./components/home/home.component";
import { RouterModule} from "@angular/router";
import {FrontComponent} from "./front.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {FaqComponent} from "./components/faq/faq.component";
import {SearchComponent} from "./components/search/search.component";
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
                path:"products/:categoryId",
                component:ProductsComponent
            },
            {
                path:"product/:productId",
                component:ProductComponent
            },
            {
                path:"checkout",
                component:CheckoutComponent
            },
            {
                path:"faq",
                component:FaqComponent
            },
            {
                path:"search/:queryString",
                component:SearchComponent
            }

        ]
    }
]

export const frontRoutes=RouterModule.forRoot(routes)




