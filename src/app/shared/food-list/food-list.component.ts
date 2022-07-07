import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  //Any para o caso de vir vazio
  public foodList: Array<FoodList> = [];

  //Injeção de dependencia
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: error => console.log(error)
    });

    this.foodListService.eventEmit.subscribe({
      next: (res: FoodList) =>{
        alert(`${res.nome} adicionado!`);
        this.foodList.push(res);
      },
      error: (err: FoodList) => console.log(err),
    });
  }

}
