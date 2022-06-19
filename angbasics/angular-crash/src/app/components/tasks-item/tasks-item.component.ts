import { Component, OnInit,Input  } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TASKS } from 'src/app/mock-tasks';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() TASKS:Task   | undefined;

  constructor() { }

  ngOnInit(): void {
  }



}
