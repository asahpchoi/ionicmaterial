import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements AfterContentInit {

  constructor() { }

  ngAfterContentInit() { 
    d3.select('p').style('color','red');
  }

}
