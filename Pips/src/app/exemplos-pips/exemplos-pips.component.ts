import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pips',
  templateUrl: './exemplos-pips.component.html',
  styleUrls: ['./exemplos-pips.component.scss']
})
export class ExemplosPipsComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
