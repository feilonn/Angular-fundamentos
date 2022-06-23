import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor:boolean = true;
  public alturaPx: string = '20px';
  public bgColor: string = 'green';
  public nome: string = "";
  public lista: Array<{ nome: string }> = [];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      if(this.alturaPx == '20px') {
        this.alturaPx = '50px';
        this.bgColor = 'grey';
      } else {
        this.alturaPx = '20px';
        this.bgColor = 'green';
      }
    }, 2000)
  }

  public addLista() {
    this.lista.push({ nome: this.nome })
    this.nome = "";
  }

}
