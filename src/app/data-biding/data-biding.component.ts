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

  public checkDisabled: boolean = true;
  public sourceImage: string = "https://img.portalgsti.com.br/9YEHBE1HnJlTShyyT-OmbFHD_7Q=/200x200/https://www.portalgsti.com.br/media/uploads/community/2016/04/25/angularjs.png"

  constructor() { }

  public clickButton(param: string) {
    alert(param);
  }

  public colorDiv: boolean = false;

  public mudaDiv() {
    this.colorDiv = !this.colorDiv;
  }

  ngOnInit(): void {
  }

}
