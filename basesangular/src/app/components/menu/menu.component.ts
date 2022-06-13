import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rotas = [
    {
      name:'Home',
      path: '/home'
    },
    {
      name:'Contato',
      path: '/contato'
    },
    {
      name:'Posts',
      path: '/posts'
    },
    {
      name:'About',
      path: '/about'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
