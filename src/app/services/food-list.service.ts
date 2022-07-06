import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Item A",
    "Item B",
    "Item C"
  ]

  constructor() { }

  public foodList() {
    return this.list;
  }
}
