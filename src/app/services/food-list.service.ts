import { EventEmitter, Injectable } from '@angular/core';

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

  constructor() { }

  public foodList() {
    return this.list;
  }

  public addFoodListItem(item: string) {
    this.addFoodListAlert(item);
    return this.list.push(item);
  }

  public addFoodListAlert(item: string) {
    return this.eventEmit.emit(item);
  }
}
