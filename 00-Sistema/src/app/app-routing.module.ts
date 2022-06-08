import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full"},
  { path: 'lacamentos', component: LancamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
