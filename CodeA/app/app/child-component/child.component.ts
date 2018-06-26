import { Component,Input,EventEmitter,Output } from '@angular/core';
import {MyService} from '../myservice.sevice';

@Component({
    selector: 'app-child-component',
    templateUrl: './child.component.html',
    styleUrls:['./child.component.css']
})

export class ChildComponent{
    name:string;
    counter:number;
    currentClass:{};
    isCounterFive: boolean=false;
    imp:boolean=true;
    empNames:string[];
    colorcode:string='red';
    title:string;
    
    @Input()
    sendtochild:string;

   

    constructor(private myservice:MyService){
      this.name = '';
      this.counter = 0;
      this.currentClass={'red':this.isCounterFive,'green':!this.isCounterFive};
      this.empNames = ["ram","shyam","john","vinti"];
      this.title   = 'I am the child component title';
      this.myservice.namesArray = ["one","two","three"];
      console.log(this.myservice.namesArray);
    }
    @Output()
    callparent:EventEmitter<string> = new EventEmitter<string>();

    callParent(){
        this.callparent.emit('Hi I am child.Child button is clicked......');
    }
  







    increment(){
        this.counter++;
        console.log(this.counter);
        if(this.counter==5){
        this.isCounterFive = true;
        console.log(this.isCounterFive);
        }
    }
    toggle(){
        this.imp = !this.imp;
    }
    getEmpName(){
        return "vinti";
    }

    }


    

    // printName(data){
    //     this.name = data.value;

    // }
