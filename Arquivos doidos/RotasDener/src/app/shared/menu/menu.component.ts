import { Component, OnInit } from '@angular/core';

import { MenuItem, PrimeNGConfig } from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
