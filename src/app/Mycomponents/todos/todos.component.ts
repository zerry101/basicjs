import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]|undefined;
  localItem:string|null;
  constructor() {
    this.localItem=localStorage.getItem("todos");

    if(this.localItem==null)
    {
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }

    
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    // const index:number|undefined=this.todos?.indexOf(todo);
    this.todos?.splice(this.todos?.indexOf(todo),1);
    console.log(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  addTodo(todo:Todo)
  {
    console.log(todo);
    this.todos?.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
