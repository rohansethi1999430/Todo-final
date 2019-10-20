import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private tdservice:TodoServiceService) { }
  task_name
  addNewTask(){
    const t={
      task_name:this.task_name
    }
    this.tdservice.addTodo(t)
  }
  deleteTask(){
    this.tdservice.deleteTodo()
  }
  ngOnInit() {
    
  }

}
