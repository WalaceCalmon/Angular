import { TableComponent } from './table/table.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LancamentosComponent, children: [
    { path: 'tabela', component: TableComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
