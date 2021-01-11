import { Component, OnInit,Input } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-task-task',
  templateUrl: './task-task.component.html',
})
export class TaskTaskComponent implements OnInit {

  @Input() tasks: Task;
   
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  show = true
  deleteTask(task: Task){
    if(confirm('Are you sure you want to delete it?')){
    this.taskService.deleteTask(task);
    }
  }


}
