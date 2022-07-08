import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public frutasList: Array<{ nome: string, preco:string }> = [
    {
      nome:"Bacuri",
      preco: "R$14.90"
    },
    {
      nome:"Uva",
      preco: "R$6.75"
    },
    {
      nome:"Mamão",
      preco: "R$9.00"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public enviarForm(form: NgForm) {
    console.log(form.value);
  }

}
