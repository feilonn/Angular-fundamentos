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
  public foodList: FoodList | any

  //Injeção de dependencia
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: error => console.log(error)
    });

    this.foodListService.eventEmit.subscribe({
      next: (res: string) => alert(`${res} adicionado!`),
      error: (err: string) => console.log(err),
    });
  }

}
