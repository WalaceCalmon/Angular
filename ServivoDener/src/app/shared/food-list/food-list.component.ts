import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoodList();

    this.foodListService.emitEvent.subscribe({
      next: (res: string) => alert(`Olha você add ` + (res))
    });
  }

  public listAddFoodList(item: string){
    return this.foodListService.addFoodList(item);
  }

  handleClick() {
      //execute action
  }


}
