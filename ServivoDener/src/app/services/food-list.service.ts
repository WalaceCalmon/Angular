import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Salada",
    "Carne",
    "Legumes"
  ]

  constructor() { }

  public getFoodList(){
    return this.list;
  }
}
