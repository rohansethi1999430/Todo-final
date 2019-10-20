import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private tdservice:TodoServiceService) { }
 
    
  TodoList=[]
  ngOnInit() {
    this.TodoList=this.tdservice.getTodo()
  
  }

}
