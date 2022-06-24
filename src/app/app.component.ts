import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public valor: number = 2;
  //É chamado quando o component é iniciado
  ngOnInit(): void {}

  public add() {
    this.valor += 1;
  }

}


