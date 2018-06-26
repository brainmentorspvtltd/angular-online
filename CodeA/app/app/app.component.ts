import { Component,ViewChild,ViewChildren,QueryList} from '@angular/core';
import { ChildComponent } from './child-component/child.component';
import { MyService } from './myservice.sevice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  names:string[];
  msg:string;
  counter:number=0;
  @ViewChild(ChildComponent)
  object:ChildComponent
  @ViewChildren(ChildComponent)
  children:QueryList<ChildComponent>
  
  constructor(private myservice:MyService){
    this.msg = 'Parent has send this msg to child';
  }
  loadData(){
    this.names = this.myservice.getData();
  }
 parentCalled(data){
   this.title = data;
 }
 printChildData(){
   this.title = this.object.getEmpName();
 }

 increment():void{
   this.children.forEach((obj)=>obj.title = 'Counter child' + this.counter);
   this.counter++;
 }
}
