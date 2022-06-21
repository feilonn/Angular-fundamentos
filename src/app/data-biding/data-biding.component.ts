import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public num1: number = 3;
  public num2: number = 6;
  public num3: number = 7;
  public num4: number = 9;

  constructor() { }

  ngOnInit(): void {
  }

}
