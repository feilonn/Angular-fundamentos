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

  public foodListDelete(id: number) {
    return this.foodListService.deleteFoodListItem(id).subscribe({
      next: res => this.foodList.splice(id - 1, 1),
      error: error => console.log(error)
    })
  }

  public foodListEdit(nome: string, id: number) {
    return this.foodListService.editFoodListItem(nome, id).subscribe({
      next: res => console.log(res),
      error: error => error
    })
  }
}
