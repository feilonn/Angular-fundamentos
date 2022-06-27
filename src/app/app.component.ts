import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public valor: number = 2;
  public getDados: { nome: string, idade: number } | undefined;
  //É chamado quando o component é iniciado
  ngOnInit(): void {}

  public add() {
    this.valor += 1;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}


