import { AppComponent } from './../../../Projeto01Curso/src/app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: AppComponent },
  { path: 'menu', loadChildren: () => import('./menu/menu-routing.module').then( m => m.MenuRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
