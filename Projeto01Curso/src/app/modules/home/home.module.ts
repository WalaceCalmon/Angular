import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddIntesComponent } from './components/todo-input-add-intes/todo-input-add-intes.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddIntesComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
