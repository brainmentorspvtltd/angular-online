import {Injectable} from '@angular/core';

@Injectable()
export class MyService{
    namesArray:string[];
constructor(){
 this.namesArray = ["ram","shyam","mike","john","tim"];
 console.log(this.namesArray);

}
getData(){
    return this.namesArray;

}
}