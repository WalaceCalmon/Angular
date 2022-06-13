import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = _cursosService;
    //this.cursosService = new CursosService;
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}