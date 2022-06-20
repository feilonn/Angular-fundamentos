import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() public teste: string = "teste";

  ngOnInit(): void {
  }

  //É chamado quando há uma alteração de dados
  ngOnChanges(): void {
    console.log("valor alterado")
  }

}
