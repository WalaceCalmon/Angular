import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';

import { LancamentosRoutingModule } from './lancamentos-router.module';
import { LancamentosComponent } from './lancamentos.component';



@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    InputMaskModule,
    InputTextModule,
    MenuModule,
    TableModule,
    TabMenuModule,
    LancamentosModule,
    LancamentosRoutingModule

  ]
  })
export class LancamentosModule { }
