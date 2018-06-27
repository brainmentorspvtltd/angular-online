import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: any;
  data: any;

 constructor(){
  this.options = {             //we need to give chart options to configure our chart
    chart: {                   //inside the options object we have a property 'chart' where we define the chart properties
      type: 'pieChart',        //the type of chart we want lineChart , historicalBarChart etc.
      height: 500,            //height of the svg canvas
      labelType:"key",        //can be percent or value;the type of label to appear in the slices
      x: function (d) {       //the value that will appear on the pie slices
        return d.key;         
      },
      y: function (d) {       //the values in whose proportion the slices will be divided
        return d.y;
      },
      showLabels: true,       //true if we want to display labels on the slices
      duration: 500,          //transition time 500ms
      labelThreshold: 0.01,       //display position of the labels
      labelSunbeamLayout: true,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    }
  };

  this.data = [
    {
      key: "P60-1",
      y: 256
    },
    {
      key: "P60-2",
      y: 445
    },
    {
      key: "P40",
      y: 225
    },
    {
      key: "P73",
      y: 127
    },
    {
      key: "P71",
      y: 128
    }
  ];

 }
}

// nv.addGraph(function() {

//   //Set Simple Chart Options
//   var chart = nv.models.pieChart()
//       .x(function(d) { return d.key })
//       .y(function(d) { return d.y })
//       .showLabels(true)
//       .showLegend(true)
//       .height(500)
      
//   //Set chart width/height and initialize animation
//   d3.select('#chart')
//       .datum(this.data)
//       .transition().duration(2000).ease('linear')
//       .attr('transform','rotate(45)')
//       .attr('width', 500)
//       .attr('height', 500)
//       .call(chart);
  
//   return chart;
  
//   });