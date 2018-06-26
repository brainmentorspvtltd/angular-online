import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:'urlpipe'
})

export class UrlPipe implements PipeTransform{
  
    transform(value,alternateUrl){
        if(value){
            return value;
        }
        else{
            return alternateUrl;
        }
    }
}