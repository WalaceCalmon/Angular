import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports:[
    ReactiveFormsModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    InputMaskModule,
    InputTextModule,
    MenuModule,
    TableModule,
    TabMenuModule,
    RippleModule
  ]
})
export class SheredPrimengModule { }
