import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

//interface
import { FoodList } from './../module/foodlist';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter;

  private list: Array<string> = []

  private url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  public getFoodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
       res => res,
       error => error
    )
  }

  public addFoodList (value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
       error => error
    );
  }

  public editFoodList (value: string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value}).pipe(
      res => res,
       error => error
    );
  }

  public deleteFoodList (id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
       error => error
    );
  }

  public listFoodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }

}
