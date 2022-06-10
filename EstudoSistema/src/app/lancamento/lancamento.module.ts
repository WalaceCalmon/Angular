import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoComponent } from './lancamento/lancamento.component';


@NgModule({
  declarations: [
    LancamentoComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule
  ]
})
export class LancamentoModule { }
