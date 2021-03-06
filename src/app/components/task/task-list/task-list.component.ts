import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service'

import { Task } from '../models/task.model'
  
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})

export class TaskListComponent implements OnInit {

  tasks: Task[]

  constructor( public taskService: TaskService) { }

  ngOnInit(): void {
   this.tasks = this.taskService.getTasks();
  }

}
