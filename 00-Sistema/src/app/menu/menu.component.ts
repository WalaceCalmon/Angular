import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menuItems: any;
    activeItem: any;

    ngOnInit() {
       this.menuItems = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/" },
        {label: 'Lançamentos', icon: 'pi pi-dollar', routerLink:"/lacamentos"  },
        {label: 'XXXXXX', icon: 'pi pi-fw pi-pencil', routerLink:"/lacamentos" },
        {label: 'XXXXXXX', icon: 'pi pi-fw pi-file', routerLink:"/lacamentos" },
        {label: 'Configurações', icon: 'pi pi-fw pi-cog', routerLink:"/lacamentos" }
      ];

      this.activeItem = this.menuItems[0];
    }

  constructor() {

  }

}
