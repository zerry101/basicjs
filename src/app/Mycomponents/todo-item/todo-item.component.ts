import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo|undefined;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  onClick(todo:Todo|undefined){
    this.todoDelete.emit(todo);
    console.log('click has triggered');
    }

  ngOnInit(): void {
  }

 

  
}
