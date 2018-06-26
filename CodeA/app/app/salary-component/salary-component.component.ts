import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-component',
  templateUrl: './salary-component.component.html',
  styleUrls: ['./salary-component.component.css']
})
export class SalaryComponentComponent implements OnInit {
  sal:number;
  hra:number;
  da:number;
  ta:number;
  pf:number;
  
  constructor() {
    this.hra = 0;
    this.da = 0;
    this.ta = 0;
    this.pf = 0;
   }

  ngOnInit() {
  }

  takeInput(event){
    this.sal = event.target.value;
    this.calculate(this.sal);
  }
 calculate(sal:number):void {
   this.hra = sal*0.30;
   this.da = sal*0.20;
   this.ta = sal*0.10;
   this.pf = sal*0.05;  
  
}
}
