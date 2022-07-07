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

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}/list-food`).pipe(
      res => res,
      error => error
    )
  }

  public addFoodListItem(item: string): Observable<FoodList> {
    // this.addFoodListAlert(item);
    return this.http.post<FoodList>(`${this.url}/list-food`, { nome: item }).pipe(
      res => res,
      error => error
    )
  }

  public editFoodListItem(item: string, id: number): Observable<FoodList> {
    // this.addFoodListAlert(item);
    return this.http.put<FoodList>(`${this.url}/list-food/${id}`, { nome: item }).pipe(
      res => res,
      error => error
    )
  }

  public deleteFoodListItem(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}/list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public addFoodListAlert(item: FoodList) {
    return this.eventEmit.emit(item);
  }
}
