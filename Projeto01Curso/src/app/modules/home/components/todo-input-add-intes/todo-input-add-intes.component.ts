import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-intes',
  templateUrl: './todo-input-add-intes.component.html',
  styleUrls: ['./todo-input-add-intes.component.scss']
})
export class TodoInputAddIntesComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    
    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList="";
    }else{
      const confirm = window.alert("Não podemos inserir itens em branco. Favor digitar um item!");
    }
  }

}
