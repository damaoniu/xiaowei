import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'imgUrl'})
export class ImgUrlPipe implements PipeTransform{
    transform(url:any, args:any):any {
        if(url){
            return "https://uxiaov.com/pms-media-service/media/"+url;
        }else{
            return "/assets/imagea/waitingpic.jepg"
        }
    }

}