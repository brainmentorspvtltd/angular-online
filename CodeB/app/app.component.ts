import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  birthday = new Date(1988,3,15);
  format:string;
  toggle:boolean = true;
  salary:number;
  mypath:string;
  altpath:string;
  constructor(){
    this.salary = 123456;
    this.mypath = '../assets/user.png';;
    this.altpath = '../assets/user.png';
  }  
  

  toggleFormat(){
    this.toggle = !this.toggle;
    console.log("toggle is",this.toggle);
    this.format = this.toggle?'shortDate':'fullDate';
  }
  
}
