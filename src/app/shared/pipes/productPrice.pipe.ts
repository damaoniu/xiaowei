import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name:'productPrice'
})
export class ProductPricePipe implements PipeTransform{
    transform(price:any, args:any):any {
        if(args[0]){

        }
        return ;
    }
}