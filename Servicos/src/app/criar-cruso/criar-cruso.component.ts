import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.services';

@Component({
  selector: 'app-criar-cruso',
  templateUrl: './criar-cruso.component.html',
  styleUrls: ['./criar-cruso.component.scss']
})
export class CriarCrusoComponent implements OnInit {


  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCursos(curso: string){
    this.cursosService.addCurso(curso);
  }

}
