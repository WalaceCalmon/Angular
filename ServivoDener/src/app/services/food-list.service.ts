import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter;

  private list: Array<string> = [
    "Salada",
    "Carne",
    "Legumes"
  ]

  constructor() { }

  public getFoodList(){
    return this.list;
  }

  public addFoodList(value: string){
    this.listFoodListAlert(value);
    return this.list.push(value);
  }

  public listFoodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

}
