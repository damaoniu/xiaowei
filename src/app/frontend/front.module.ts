import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/index";
import {Home} from "./components/home/home.component";
import {FrontComponent} from "./front.component";
import {frontRoutes} from "./front.routing";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {PartsModule} from "./components/parts/parts.module";
@NgModule({
    imports: [SharedModule,frontRoutes,PartsModule],
    declarations:[
        FrontComponent,Home,ProductComponent,ProductsComponent
    ],
    exports:[
        FrontComponent,Home,ProductComponent,ProductsComponent
    ]
})
export class Front{

}