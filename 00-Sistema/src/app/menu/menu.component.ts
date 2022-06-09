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
      { label: 'Home', routerLink:['/'], icon: 'pi pi-fw pi-home'},
      { label: 'Lançamentos', routerLink:['/lacamentos'], icon: 'pi pi-dollar'},
      { label: 'XXXXXX', icon: 'pi pi-fw pi-pencil'},
      { label: 'XXXXXXX', icon: 'pi pi-fw pi-file'},
      { label: 'Configurações', icon: 'pi pi-fw pi-cog'},
    ];
  this.activeItem = this.menuItems[0];
  }

  constructor() {

  }

}
