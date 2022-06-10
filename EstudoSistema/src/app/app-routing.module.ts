import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path:'', component:MenuComponent,pathMatch:"full" },
  { path: 'lancamento',loadChildren: () => import('./lancamento/lancamento.module').then(m => m.LancamentoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
