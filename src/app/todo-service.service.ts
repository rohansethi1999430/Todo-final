import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
  todo=[
    {task_name:'go to library'},
    {task_name:'call home'},
    {task_name:'do homework'}
  ]
  getTodo(){
    return this.todo;
  }
  addTodo(td){
    this.todo.push(td);
  }
  deleteTodo(){
    this.todo.shift();
  }
  
}
