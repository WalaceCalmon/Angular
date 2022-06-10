import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SheredPrimengModule } from '../shared/shered-primeng/shered-primeng.module';
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    LancamentosComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    SheredPrimengModule
  ]
})
export class LancamentosModule { }
