import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  className: string;
  count: number = 0;
  showHide: boolean;
  title = 'Created by Amit';
  name:string;
  firstNumber:number;
  secondNumber:number;
  result:number;
  constructor(){
    this.secondNumber = this.firstNumber = 0;
  this.result = 0;
    this.name = '';
    this.showHide = true;
    this.className = 'red';
  }
  takeFirstNumber(event):void{
  this.firstNumber = parseInt(event.target.value);
  }
  takeSecondNumber(event):void{
    this.secondNumber = parseInt(event.target.value);
    }
    add():void{
    this.result = this.firstNumber + this.secondNumber;
    }
    subtract():void{
      this.result = this.firstNumber - this.secondNumber;
    }
  takeInput(event):void{
  this.name = event.target.value;
  }
  increment() {
    this.className = this.count >= 10 ? 'green' : 'red';

    this.count ++;
    this.appear();

  }
  appear(){
    if(this.count>=10){
      this.showHide = false;
    }
  }
}
