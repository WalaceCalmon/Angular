import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  getCursos(){
    return ['Angular 13', 'Java', 'C#'];
  }

}
