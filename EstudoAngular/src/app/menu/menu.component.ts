import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  activeItem: MenuItem = this.menuItems[0];
  ngOnInit() {
     this.menuItems = [
      { label: 'home', icon: 'pi pi-fw pi-home'},
      { label: 'Lançamentos', routerLink:"/lancamentos", icon: 'pi pi-dollar'},
      { label: 'Dashboard', icon: 'pi pi-fw pi-pencil'},
      { label: 'Teste', icon: 'pi pi-fw pi-pencil'},
      { label: 'Configurações', icon: 'pi pi-fw pi-cog'},
    ];
    this.activeItem = this.menuItems[0];
  }

  constructor() {

  }

}
