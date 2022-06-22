import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true;
  public cont: number = 0;

  public pessoas: Array<{ nome: string, idade: number }> = [
    {
      nome: "Raul Correia",
      idade:  100
    },
    {
      nome: "Teste 1",
      idade: 1
    },
    {
      nome: "Teste 2",
      idade: 1
    },
    {
      nome: "Teste 3",
      idade: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClickBool() {
    this.conditionClick = !this.conditionClick;
  }

  public pushList() {
    this.cont++;
    this.pessoas.push({ nome: "Novo "+this.cont, idade: this.cont + 10})
  }

  public onClickList(event: number) {
    //Deleta o elemento da lista que foi clicado.
    this.pessoas.splice(event, 1);
  }

}
