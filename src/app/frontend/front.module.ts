import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/index";
import {Home} from "./components/home/home.component";
import {FrontComponent} from "./front.component";
import {frontRoutes} from "./front.routing";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {PartsModule} from "./components/parts/parts.module";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {FaqComponent} from "./components/faq/faq.component";
import {FrontDirectivesModule} from "./directives/frontDirective.module";
@NgModule({
    imports: [SharedModule,frontRoutes,PartsModule,FrontDirectivesModule],
    declarations:[
        FrontComponent,Home,ProductComponent,ProductsComponent,
        CheckoutComponent,FaqComponent
    ],
    exports:[
        FrontComponent,Home,ProductComponent,ProductsComponent,
        CheckoutComponent,FaqComponent
    ]
})
export class Front{

}