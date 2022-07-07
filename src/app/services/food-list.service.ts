import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public eventEmit = new EventEmitter();

  private list: Array<string> = [
    "Item A",
    "Item B",
    "Item C"
  ]

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}/list-food`).pipe(
      res => res,
      error => error
    )
  }

  public addFoodListItem(item: string) {
    this.addFoodListAlert(item);
    return this.list.push(item);
  }

  public addFoodListAlert(item: string) {
    return this.eventEmit.emit(item);
  }
}
