import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]|undefined;
  constructor() {
    this.todos=[
      {
        sno:3,
        title:"This is title3",
        desc:"Description",
        active:true
      },
      {
        sno:2,
        title:"This is title2",
        desc:"Description",
        active:true
      },
      {
        sno:1,
        title:"This is title1",
        desc:"Description",
        active:true
      }
      
  ]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);

  }

}
