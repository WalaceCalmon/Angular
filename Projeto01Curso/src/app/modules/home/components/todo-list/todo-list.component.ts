import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  public taskList: Array<TaskList> = [
   // {task: "Minha nova task", cheked: true},
   // {task: "Minha nova task 2", cheked: false},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
