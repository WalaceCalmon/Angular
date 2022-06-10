import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SheredPrimengModule } from '../shared/shered-primeng/shered-primeng.module';
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos/lancamentos.component';



@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    SheredPrimengModule
  ]
})
export class LancamentosModule { }
