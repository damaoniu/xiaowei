
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UtilsService} from "./services/utils.services";
import {ProductService} from "./services/product/product.service";
import {ImgUrlPipe} from "./pipes/imgUrl.pipe";
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    declarations:[ImgUrlPipe],
    exports:[
        RouterModule,FormsModule,CommonModule,
        ImgUrlPipe
    ],
    providers:[UtilsService,ProductService]
})
export class SharedModule{

}

