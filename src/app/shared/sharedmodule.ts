
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UtilsService} from "./services/utils.services";
import {ProductService} from "./services/product/product.service";
import {ImgUrlPipe} from "./pipes/imgUrl.pipe";
import {TypeaheadModule} from 'ng2-bootstrap/ng2-bootstrap'
import {GeoNamesService} from "./services/geonames.service";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import {FileAddedDirective} from "./directives/fileAdded.directive";
import {SearchService} from "./services/search.service";
import {AuthenticationService} from "./services/authentication.service";
import {CartService} from "./services/cartService/cart.service";
import {CategoryService} from "./services/category/category.service";
import {OrderService} from "./services/orders/order.service";
import {UserService} from "./services/user/user.service";
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    declarations:[ImgUrlPipe,FileAddedDirective],
    exports:[
        RouterModule,FormsModule,CommonModule,ReactiveFormsModule,
        ImgUrlPipe,TypeaheadModule,FileUploadModule,
        FileAddedDirective
    ],
    providers:[UtilsService,ProductService,GeoNamesService,SearchService,AuthenticationService, CartService,UserService,
        CategoryService,
        OrderService]
})
export class SharedModule{

}

