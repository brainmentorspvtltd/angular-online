import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  sub:any;
  title:string;
  constructor(private route:ActivatedRoute) { }

 
    ngOnInit() {
      this.sub = this.route.params.subscribe(params=>{
        this.title = "Price for this mobile is"+params.price;});
  }

}

