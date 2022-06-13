import { Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService{

  cursos: string[] = ['Angular 13', 'Java', 'C#'];

  constructor(private logService: LogService){

  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
