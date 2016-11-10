
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
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    declarations:[ImgUrlPipe],
    exports:[
        RouterModule,FormsModule,CommonModule,ReactiveFormsModule,
        ImgUrlPipe,TypeaheadModule,FileUploadModule
    ],
    providers:[UtilsService,ProductService,GeoNamesService]
})
export class SharedModule{

}

