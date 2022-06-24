import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{ nome: string, idade: number}> = [
    {
      nome: "Raul",
      idade: 24
    },
    {
      nome: "Teste 2",
      idade: 42
    },
    {
      nome: "Teste 3",
      idade: 22
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public showData(index: number) {
    console.log(this.list[index]);
  }

}
