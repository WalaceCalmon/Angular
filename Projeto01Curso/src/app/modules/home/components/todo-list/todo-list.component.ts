import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  public taskList: Array<TaskList> = [];
  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, cheked: false });
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1);
  }

  public deleteItemAllTaskList(){
    const confirm = window.confirm("Você deseja realmente DELETAR tudo?");

    if(confirm){
      this.taskList = [];
    }
  }
}
