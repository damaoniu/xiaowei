
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UtilsService} from "./services/utils.services";
import {ProductService} from "./services/product/product.service";
import {ImgUrlPipe} from "./pipes/imgUrl.pipe";
import {TypeaheadModule} from 'ng2-bootstrap/ng2-bootstrap'
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    declarations:[ImgUrlPipe],
    exports:[
        RouterModule,FormsModule,CommonModule,ReactiveFormsModule,
        ImgUrlPipe,TypeaheadModule
    ],
    providers:[UtilsService,ProductService]
})
export class SharedModule{

}

