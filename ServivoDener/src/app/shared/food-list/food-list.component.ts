import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

//Interfaces
import { FoodList } from './../../module/foodlist';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
       next:(res: Array<FoodList>) => (this.foodList = res),
       error: (err: Error) => err
    });

    this.foodListService.emitEvent.subscribe({
        next: (res: FoodList) => {
          alert(`Olha você add ` + (res.nome));
          return this.foodList.push(res);
        },
        error: (err: Error) => err
    });
  }

  public listAddFoodList(item: string){
    return this.foodListService.addFoodList(item).subscribe(
      res => this.foodListService.listFoodListAlert(res),
      error => error
    );
  }

  handleClick() {
      //execute action
  }


}
