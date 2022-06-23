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

}
