import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  cursos: string[] = ['Angular 13', 'Java', 'C#'];

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
